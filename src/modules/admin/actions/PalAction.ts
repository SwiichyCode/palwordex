"use server";
import { db } from "@/server/db";
import { adminAction } from "@/lib/safe-action";
import { addPalActionSchema } from "../PalForm_schema";
import type { WorkSuitabilityName } from "@prisma/client";

export const addPal = adminAction(addPalActionSchema, async (data) => {
  try {
    await db.pal.create({
      data: {
        no: data.no,
        name: data.name,
        picture: data.picture,
        worksuitability: {
          create: data.worksuitability.map((ws) => ({
            worksuitabilityLevel: ws.worksuitabilityLevel,
            worksuitabilityName: ws.worksuitabilityName as WorkSuitabilityName,
          })),
        },
      },
    });
  } catch (error) {
    if (error instanceof Error) return { error: error.message };
  }
});
