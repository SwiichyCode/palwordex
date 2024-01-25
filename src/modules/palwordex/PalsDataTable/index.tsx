import { DataTable } from "../DataTable";
import { columns } from "./columns";
import type { PalWithWorksuitability } from "../PalsVisualizer";

type Props = {
  pals: PalWithWorksuitability[];
};

export const PalsDataTable = ({ pals }: Props) => {
  return <DataTable columns={columns} data={pals} />;
};
