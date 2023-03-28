import { z, defineCollection } from "astro:content";

export const collections = {
  wiki: defineCollection({
    schema: z.object({
      title: z.string(),
    }),
  }),
  people: defineCollection({
    schema: z.object({
      name: z.string(),
      discordTag: z.string(),
      discordUserId: z.number(),
      teams: z.array(z.string()),
    }),
  }),
  teams: defineCollection({
    schema: z.object({
      name: z.string(),
      color: z.string(),
    }),
  }),
};
