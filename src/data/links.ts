export interface SocialLink {
  platform: string
  url: string
  handle: string
  description: string
  icon: string
}

export const socialLinks: SocialLink[] = [
  { platform: 'GitHub',    url: 'https://github.com/you',      handle: '@you',          description: 'Code and open source projects', icon: 'FiGithub'   },
  { platform: 'Twitter/X', url: 'https://x.com/you',           handle: '@you',          description: 'Thoughts and updates',          icon: 'FiTwitter'  },
  { platform: 'LinkedIn',  url: 'https://linkedin.com/in/you', handle: 'Your Name',     description: 'Professional profile',          icon: 'FiLinkedin' },
  { platform: 'Dribbble',  url: 'https://dribbble.com/you',    handle: '@you',          description: 'Design work and shots',         icon: 'FiDribbble' },
  { platform: 'Email',     url: 'mailto:you@email.com',        handle: 'you@email.com', description: 'Best way to reach me',          icon: 'FiMail'     },
]
