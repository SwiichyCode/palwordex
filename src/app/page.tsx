import { PalsVisualizer } from "@/modules/palwordex/PalsVisualizer";

import { db } from "@/server/db";

export default async function HomePage() {
  const pals = await db.pal.findMany({
    include: {
      worksuitability: true,
    },
  });

  return (
    <div className="flex h-screen w-full flex-col items-center gap-8 p-14">
      <PalsVisualizer pals={pals} />
    </div>
  );
}
