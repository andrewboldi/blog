import type { PostConfig } from '$lib/types/post'

export const post: PostConfig = {
  comment: {
    giscus: {
      category: 'Announcements',
      categoryID: 'DIC_kwDON-42Gc4CpcKv',
      inputPosition: 'top',
      lang: 'en', // language
      reactionsEnabled: true,
      repo: 'andrewboldi/blog',
      repoID: 'R_kgDON-42GQ',
      theme: 'catppuccin_frappe', // theme
    },
    style: 'boxed',
    // if you want to use other comment systems, add to array
    use: ['Comments'],
  },

}
