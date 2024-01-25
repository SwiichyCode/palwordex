import * as z from "zod";
import { worksuitability } from "@/constants/worksuitability";

const worksuitabilityNames = worksuitability.map((w) => w.name) as [
  string,
  ...string[],
];

export const formSchema = z.object({
  no: z.string().min(1).max(999),
  name: z.string().min(1).max(999),
  picture: z.string().min(1).max(999),
  worksuitability: z.array(
    z.object({
      worksuitabilityName: z.enum(worksuitabilityNames),
      worksuitabilityLevel: z.coerce.number().min(1).max(5),
    }),
  ),
});

export const addPalActionSchema = z.object({
  ...formSchema.shape,
});
