"use server";
import { db } from "@/server/db";
import { adminAction } from "@/lib/safe-action";
import { addPalActionSchema } from "../PalForm_schema";

export const addPal = adminAction(addPalActionSchema, async (data) => {
  try {
    await db.pal.create({
      data: {
        no: data.no,
        name: data.name,
        picture: data.picture,
        worksuitability: {
          create: data.worksuitability,
        },
      },
    });
  } catch (error) {
    if (error instanceof Error) return { error: error.message };
  }
});
