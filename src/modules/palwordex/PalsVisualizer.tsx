"use client";
import React, { useState } from "react";
import { WorksuitabilityToggle } from "./WorksuitabilityToggle";
import { PalsDataTable } from "./PalsDataTable";
import type { Pal, WorkSuitability, WorkSuitabilityName } from "@prisma/client";

export interface PalWithWorksuitability extends Pal {
  worksuitability: WorkSuitability[];
}

type Props = {
  pals: PalWithWorksuitability[];
};

export const PalsVisualizer = ({ pals }: Props) => {
  const [worksuitability, setWorksuitability] = useState<WorkSuitabilityName[]>(
    [],
  );

  const palsFilteredByWorksuitability = pals.filter((pal) => {
    const palWorksuitabilityNames = pal.worksuitability.map(
      (ws) => ws.worksuitabilityName,
    );
    return worksuitability.every((ws) => palWorksuitabilityNames.includes(ws));
  });

  return (
    <>
      <WorksuitabilityToggle setWorksuitability={setWorksuitability} />
      <PalsDataTable pals={palsFilteredByWorksuitability} />
    </>
  );
};
