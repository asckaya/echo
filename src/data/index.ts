import type {
  About,
  Award,
  Experience,
  ExperienceEntry,
  NewsItem,
  ProjectItem,
  Publication,
  Research,
  Talk,
  TeachingEntry,
} from '../types'

// ── Glob Imports ──

const globsEn = {
  about: import.meta.glob('@content/about.mdx', { eager: true }),
  articles: import.meta.glob('@content/articles/*.mdx', { eager: true }),
  projects: import.meta.glob('@content/projects/*.mdx', { eager: true }),
  pubs: import.meta.glob('@content/publications/*.mdx', { eager: true }),
}

const globsZh = {
  about: import.meta.glob('@content/zh/about.mdx', { eager: true }),
  articles: import.meta.glob('@content/zh/articles/*.mdx', { eager: true }),
  projects: import.meta.glob('@content/zh/projects/*.mdx', { eager: true }),
  pubs: import.meta.glob('@content/zh/publications/*.mdx', { eager: true }),
}

// ── Core Pipeline ──

function collectMd(modules: Record<string, unknown>) {
  return Object.values(modules).map((m) => {
    const mod = m as { default: React.ComponentType; frontmatter?: Record<string, string>; }
    const data = mod.frontmatter || {}
    return {
      ...data,
      abstract: data.abstract || data.bodyText || '',
      Content: mod.default,
      journey: data.journey || data.bodyText || '',
      // Map extracted text directly to summary/abstract if missing
      summary: data.summary || data.bodyText || '',
    }
  })
}

// ── Data Assembly ──

import awardsEn from '@content/awards.json'
import expEn from '@content/experience.json'
import logosEn from '@content/logos.json'
import newsEn from '@content/news.json'
import resEn from '@content/research.json'
import siteEn from '@content/site.json'
import talksEn from '@content/talks.json'
import teachEn from '@content/teaching.json'
import awardsZh from '@content/zh/awards.json'
import expZh from '@content/zh/experience.json'
import logosZh from '@content/zh/logos.json'
import newsZh from '@content/zh/news.json'
import resZh from '@content/zh/research.json'
import siteZh from '@content/zh/site.json'
import talksZh from '@content/zh/talks.json'
import teachZh from '@content/zh/teaching.json'

const build = (lang: 'en' | 'zh') => {
  const g = lang === 'en' ? globsEn : globsZh
  const j = lang === 'en' 
    ? { awards: awardsEn, exp: expEn, logos: logosEn, news: newsEn, res: resEn, site: siteEn, talks: talksEn, teach: teachEn } 
    : { awards: awardsZh, exp: expZh, logos: logosZh, news: newsZh, res: resZh, site: siteZh, talks: talksZh, teach: teachZh }
  
  return {
    about: (collectMd(g.about)[0] || {}) as unknown as About,
    articles: collectMd(g.articles) as unknown as ProjectItem[],
    awards: j.awards as Award[],
    experience: { academic: [], professional: [], ...j.exp } as unknown as Experience,
    experienceTimeline: (j.exp as unknown as { timeline: ExperienceEntry[] }).timeline,
    institutionLogos: j.logos as Record<string, string>,
    news: j.news as NewsItem[],
    projects: collectMd(g.projects) as unknown as ProjectItem[],
    publications: collectMd(g.pubs) as unknown as Publication[],
    research: j.res as Research,
    siteConfig: j.site,
    talks: j.talks as Talk[],
    teaching: j.teach as TeachingEntry[],
  }
}

const cache = { en: build('en'), zh: build('zh') }
export const getLocalizedData = (l: string) => cache[l as 'en' | 'zh'] || cache.en

// Static exports
export const projects = cache.en.projects
export const publications = cache.en.publications
export const about = cache.en.about

export const getPublicationStats = (p: Publication[]) => {
  const s = {
    byVenue: {} as Record<string, number>,
    byYear: {} as Record<number | string, number>,
    firstAuthor: 0,
    total: p.length,
    withCode: 0,
  }
  p.forEach((x) => {
    s.byYear[x.year] = (s.byYear[x.year] || 0) + 1
    s.byVenue[x.venueType] = (s.byVenue[x.venueType] || 0) + 1
    if (x.isFirstAuthor) s.firstAuthor++
    if (x.links?.code) s.withCode++
  })
  return s
}
