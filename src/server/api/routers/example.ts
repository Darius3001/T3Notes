import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "t3notes/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        text: `Hello ${input.text}`,
      };
    }),
});
