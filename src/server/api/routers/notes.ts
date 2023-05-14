import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

let text = "asdfasdfas"

export const noteRouter = createTRPCRouter({
    setNote: publicProcedure
        .input(z.object({ text: z.string() }))
        .mutation(({ input }) => {
            text = input.text

            return {
                text: input.text,
            };
        }),
    getNote: publicProcedure
        .input(z.object({}))
        .query(() => {
            return {
                text: text
            }
        })
})