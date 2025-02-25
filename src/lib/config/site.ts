import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  author: {
    avatar: '/assets/maskable@512.png',
    bio: 'Learning as much as possible.',
    name: 'Andrew Boldi',
    status: '⚡',
  },
  description: 'Template by SvelteKit/Urara',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app', // andrewboldi.com
  lang: 'en-US',
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  subtitle: 'Blog',
  themeColor: '#3D4451',
  title: 'Andrew Boldi',
}
