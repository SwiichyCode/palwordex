"use client";

import { ColumnDef } from "@tanstack/react-table";

type Pal = {
  no: string;
  name: string;
  worksuitability: {
    worksuitabilityName: string;
    worksuitabilityLevel: number;
  }[];
};

export const columns: ColumnDef<Pal>[] = [
  {
    accessorKey: "no",
    header: "no°",
  },
  {
    accessorKey: "name",
    header: "name",
  },
  {
    accessorKey: "worksuitability",
    header: "worksuitability",
    cell: ({ cell }) => {
      const worksuitability = cell.row.original.worksuitability;

      return (
        <div className="flex gap-1">
          {worksuitability.map((ws, index) => (
            <div key={index}>
              <div>
                {ws.worksuitabilityName} ({ws.worksuitabilityLevel})
              </div>
            </div>
          ))}
        </div>
      );
    },
  },
];
