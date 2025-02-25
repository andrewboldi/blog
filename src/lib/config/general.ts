import type { DateConfig, FeedConfig, FooterConfig, HeadConfig, HeaderConfig, ThemeConfig } from '$lib/types/general'

export const theme: ThemeConfig = [
  {
    name: 'cmyk',
    text: 'Light',
  },
  // {
  //   name: 'black',
  //   text: 'Dark', // for some elusive reason, border radius disappears with this style
  // },
  {
    name: 'dracula',
    text: '🧛 Dark',
  },
  // {
  //   name: 'valentine',
  //   text: '🌸 Valentine',
  // },
  // {
  //   name: 'aqua',
  //   text: '💦 Aqua',
  // },
  // {
  //   name: 'synthwave',
  //   text: '🌃 Synthwave',
  // },
  // {
  //   name: 'night',
  //   text: '🌃 Night',
  // },
  // {
  //   name: 'lofi',
  //   text: '🎶 Lo-Fi',
  // },
  // {
  //   name: 'lemonade',
  //   text: '🍋 Lemonade',
  // },
  // {
  //   name: 'cupcake',
  //   text: '🧁 Cupcake',
  // },
  // {
  //   name: 'garden',
  //   text: '🏡 Garden',
  // },
  // {
  //   name: 'retro',
  //   text: '🌇 Retro',
  // },
]

export const head: HeadConfig = {}

export const header: HeaderConfig = {
  // nav: [
  //   // Frankly, I don't need a head now. This is just our blog site.
  //   // We will eventually have this as blog.andrewboldi.com and this is not
  //   // my portfolio or main website. Just blog
  //   {
  //     link: '/hello-world',
  //     text: 'Get Started',
  //   },
  //   {
  //     link: '/hello-world/elements',
  //     text: 'Elements',
  //   },
  // ],
}

export const footer: FooterConfig = {
  // nav: [
  //   // Who cares, tbh
  //   {
  //     link: '/atom.xml',
  //     text: 'Feed',
  //   },
  //   {
  //     link: '/sitemap.xml',
  //     text: 'Sitemap',
  //   },
  // ],
}

export const date: DateConfig = {
  locales: 'en-US',
  options: {
    day: 'numeric',
    month: 'short',
    weekday: 'short',
    year: 'numeric',
  },
}

export const feed: FeedConfig = {}
