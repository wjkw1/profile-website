import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      source: 'blog/*.md',
      type: 'page',
      // Define custom schema for docs collection
      schema: z.object({
        tags: z.array(z.string()),
        img: z.string(),
        imgAlt: z.string(),
        imgArtistName: z.string(),
        imgArtistSource: z.string(),
        imgSource: z.string(),
        readTime: z.string(),
        date: z.date()
      })
    })
  }
})
