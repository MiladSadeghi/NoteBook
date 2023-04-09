import { ZodType, z } from "zod";

export type comment = { name: string; message: string };

export const commentForm: ZodType<comment> = z.object({
  name: z.string().min(3).max(20),
  message: z.string().min(10),
});
