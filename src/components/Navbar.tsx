import {
  Box,
  Flex,
  IconButton,
  HStack,
  Link as ChakraLink,
  Image,
  useDisclosure,
  VStack,
  Button,
} from '@chakra-ui/react'
import { useColorMode } from '@/color-mode'
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'
import { ThemePicker } from './ThemePicker'
import { MotionHover } from './animations/MotionList'
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope } from 'react-icons/fa'
import { SiGooglescholar } from 'react-icons/si'
import { useTranslation } from 'react-i18next'
import { useLocalizedData } from '@/hooks/useLocalizedData'

const Navbar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const location = useLocation()
  const { open: isOpen, onOpen, onClose } = useDisclosure()
  const { t, i18n } = useTranslation()
  const { navItems, siteOwner } = useLocalizedData()

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'zh' ? 'en' : 'zh')
  }

  const socialLinks = [
    { icon: FaEnvelope, href: `mailto:${siteOwner.contact.email}`, label: 'Email' },
    { icon: FaGithub, href: siteOwner.social.github, label: 'GitHub' },
    { icon: FaLinkedin, href: siteOwner.social.linkedin, label: 'LinkedIn' },
    { icon: FaMedium, href: siteOwner.social.medium, label: 'Medium' },
    { icon: SiGooglescholar, href: siteOwner.social.googleScholar, label: 'Google Scholar' },
  ].filter((link) => link.href)

  return (
    <Box
      as="nav"
      py={4}
      borderBottom="1px solid"
      borderColor="var(--border-color)"
      position="sticky"
      top={0}
      bg="var(--bg-color)"
      zIndex={1000}
      w="full"
    >
      <Flex justify="space-between" align="center" w="full" px={4} position="relative">
        {/* Left Section: Mobile hamburger + Always-visible Logo */}
        <HStack gap={2}>
          <Box display={{ base: 'block', md: 'none' }}>
            <MotionHover>
              <IconButton
                aria-label={t('aria.openNav')}
                onClick={isOpen ? onClose : onOpen}
                variant="ghost"
                color="var(--text-color)"
              >
                {isOpen ? <FiX /> : <FiMenu />}
              </IconButton>
            </MotionHover>
          </Box>
          <MotionHover>
            <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
              <Image
                src={`${import.meta.env.BASE_URL}logo-icon.svg`}
                alt="TermHub"
                h="28px"
                w="28px"
                transition="opacity 0.15s"
                _hover={{ opacity: 0.8 }}
              />
            </Link>
          </MotionHover>
        </HStack>

        {/* Desktop nav (centered-right) */}
        <HStack gap={8} display={{ base: 'none', md: 'flex' }} ml="auto" mr={{ base: 0, md: 6 }}>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path

            return (
              <MotionHover key={item.path}>
                <Link
                  to={item.path}
                  style={{
                    color: 'var(--text-color)',
                    textDecoration: 'none',
                    borderBottom: isActive ? '2px solid var(--accent-color)' : 'none',
                    paddingBottom: '2px',
                    fontSize: '1rem',
                    fontWeight: isActive ? '600' : '400',
                    transition: 'all 0.2s',
                  }}
                >
                  {t(item.labelKey)}
                </Link>
              </MotionHover>
            )
          })}
        </HStack>

        {/* Global Action Items */}
        <HStack gap={4}>
          {/* Desktop-only: Socials and Language switcher */}
          <HStack gap={4} display={{ base: 'none', md: 'flex' }}>
            {socialLinks.map((link) => (
              <MotionHover key={link.label}>
                <ChakraLink
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="var(--secondary-text)"
                  p={1.5}
                  borderRadius="md"
                  _hover={{
                    color: 'var(--accent-color)',
                    bg: link.label === 'LinkedIn' || link.label === 'Email'
                      ? 'var(--hover-color)'
                      : 'transparent',
                  }}
                  transition="all 0.2s"
                >
                  <Box as={link.icon} fontSize="1.2rem" />
                </ChakraLink>
              </MotionHover>
            ))}
            <MotionHover>
              <Button
                size="xs"
                variant="ghost"
                color="var(--text-color)"
                fontWeight="medium"
                fontSize="xs"
                px={2}
                minW="auto"
                onClick={toggleLanguage}
                aria-label={t('aria.toggleLanguage')}
                _hover={{
                  bg: 'var(--hover-color)',
                  transform: 'translateY(-2px)',
                }}
                transition="all 0.2s"
              >
                {i18n.language === 'zh' ? 'EN' : '中'}
              </Button>
            </MotionHover>
          </HStack>

          {/* Theme & Color Mode (Always visible for quick access) */}
          <HStack gap={1}>
            <MotionHover>
              <ThemePicker />
            </MotionHover>
            <MotionHover>
              <IconButton
                aria-label={t('aria.toggleColorMode')}
                onClick={(e) => toggleColorMode(e)}
                variant="ghost"
                color="var(--text-color)"
                _hover={{
                  bg: 'var(--hover-color)',
                  transform: 'translateY(-2px)',
                }}
                transition="all 0.2s"
              >
                {colorMode === 'dark' ? <FiSun /> : <FiMoon />}
              </IconButton>
            </MotionHover>
          </HStack>
        </HStack>
      </Flex>

      {isOpen && (
        <Box display={{ base: 'block', md: 'none' }} mt={3} px={4}>
          <VStack align="stretch" gap={3} bg="var(--bg-color)">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              return (
                <MotionHover key={item.path}>
                  <Link
                    to={item.path}
                    onClick={onClose}
                    style={{
                      color: isActive ? 'var(--accent-color)' : 'var(--text-color)',
                      textDecoration: 'none',
                      fontWeight: isActive ? 600 : 400,
                      display: 'block',
                      padding: '4px 0',
                    }}
                  >
                    {t(item.labelKey)}
                  </Link>
                </MotionHover>
              )
            })}

            <VStack align="stretch" gap={2}>
              {socialLinks.map((link) => (
                <ChakraLink
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="var(--secondary-text)"
                  _hover={{ color: 'var(--accent-color)' }}
                >
                  <Box as={link.icon} mr={2} display="inline-block" /> {link.label}
                </ChakraLink>
              ))}
            </VStack>

            <HStack gap={2}>
              <Button
                size="sm"
                variant="outline"
                color="var(--text-color)"
                onClick={toggleLanguage}
                flex={1}
              >
                {i18n.language === 'zh' ? 'English' : '中文'}
              </Button>
              <ThemePicker />
              <IconButton
                aria-label={t('aria.toggleColorMode')}
                onClick={(e) => toggleColorMode(e)}
                variant="outline"
                color="var(--text-color)"
              >
                {colorMode === 'dark' ? <FiSun /> : <FiMoon />}
              </IconButton>
            </HStack>
          </VStack>
        </Box>
      )}
    </Box>
  )
}

export default Navbar
