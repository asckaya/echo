import { VStack, Heading, Text, Box, Container, HStack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useLocalizedData } from '@/hooks/useLocalizedData'
import { MotionBox, MotionList, MotionHover } from './animations/MotionList'
import { useThemeConfig } from '@/config/theme'
import { useColorMode } from '@/color-mode'

const Contact = () => {
  const { t } = useTranslation()
  const { siteOwner, githubUsername } = useLocalizedData()
  const { colorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const { terminalPalette } = useThemeConfig()
  const tc = terminalPalette.colors(isDark)

  const contactLinks = [
    {
      label: t('contact.email'),
      value: siteOwner.contact.email,
      href: `mailto:${siteOwner.contact.email}`,
      display: siteOwner.contact.email,
    },
    {
      label: t('contact.linkedin'),
      value: siteOwner.social.linkedin,
      href: siteOwner.social.linkedin,
      display: `@${siteOwner.social.linkedin.split('/').filter(Boolean).pop()}`,
    },
    {
      label: t('contact.github'),
      value: siteOwner.social.github,
      href: siteOwner.social.github,
      display: `@${githubUsername}`,
    },
    {
      label: t('contact.medium'),
      value: siteOwner.social.medium,
      href: siteOwner.social.medium,
      display: `@${siteOwner.social.medium.split('@').pop()}`,
    },
    {
      label: t('contact.googleScholar'),
      value: siteOwner.social.googleScholar,
      href: siteOwner.social.googleScholar,
      display: t('contact.viewProfile'),
    },
  ]

  return (
    <Container maxW="7xl" px={4} py={8}>
      <VStack gap={8} align="stretch">
        <MotionBox delay={0.1}>
          <Heading as="h1" size="xl" mb={6}>
            {t('contact.title')}
          </Heading>
          <Box className="meta" mb={4}>
            <Box className="meta-item" fontSize="sm" color={tc.secondary}>
              <Box as="i" className="fa-solid fa-clock" mr={2} />
              {t('contact.responseTime')}
            </Box>
          </Box>

          <MotionBox delay={0.2}>
            <Box
              as="pre"
              p={4}
              bg={tc.header}
              color={tc.text}
              borderRadius="md"
              fontFamily="mono"
              mb={6}
              border="1px solid"
              borderColor={tc.border}
              boxShadow="inner"
            >
              {`# ${t('contact.contactInfo')}
EMAIL    = "${siteOwner.contact.email}"
LINKEDIN = "${siteOwner.social.linkedin}"
GITHUB   = "${siteOwner.social.github}"
LOCATION = "${siteOwner.contact.location}"`}
            </Box>
          </MotionBox>

          <MotionBox delay={0.3}>
            <Box
              mt={8}
              p={6}
              borderRadius="md"
              bg={tc.bg}
              borderWidth="1px"
              borderColor={tc.border}
              boxShadow="lg"
            >
              <Heading as="h2" size="sm" mb={6} color={tc.highlight} fontFamily="mono" letterSpacing="widest">
                // {t('contact.quickLinks').toUpperCase()}
              </Heading>

              <MotionList staggerDelay={0.1}>
                {contactLinks.map((link) => (
                  <MotionBox key={link.label}>
                    <HStack justify="space-between" wrap="wrap" gap={4} mb={4}>
                      <Text as="span" fontWeight="bold" fontSize="sm" color={tc.prompt} fontFamily="mono" w="120px">
                        {link.label}:
                      </Text>
                      <MotionHover>
                        <Box flex="1">
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              color: tc.command,
                              textDecoration: 'none',
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.9rem',
                              borderBottom: `1px solid transparent`,
                              transition: 'border-color 0.2s',
                            }}
                            onMouseOver={(e) => (e.currentTarget.style.borderBottomColor = tc.command)}
                            onMouseOut={(e) => (e.currentTarget.style.borderBottomColor = 'transparent')}
                          >
                            {link.display}
                          </a>
                        </Box>
                      </MotionHover>
                    </HStack>
                  </MotionBox>
                ))}
              </MotionList>
            </Box>
          </MotionBox>
        </MotionBox>
      </VStack>
    </Container>
  )
}

export default Contact
