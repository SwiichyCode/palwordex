import { DataTable } from "../DataTable";
import { columns } from "./columns";
import type { Pal } from "@prisma/client";

type Props = {
  pals: Pal[];
};

export const PalsDataTable = ({ pals }: Props) => {
  return <DataTable columns={columns} data={pals} />;
};
