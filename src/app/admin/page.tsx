import { db } from "@/server/db";
import { getServerAuthSession } from "@/server/auth";
import { PalForm } from "@/modules/admin/PalForm";

export default async function AdminPage() {
  const session = await getServerAuthSession();

  if (session?.user.role !== "ADMIN") {
    return <div>Access Denied</div>;
  }

  const pals = await db.pal.findMany();

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-8">
      <h1 className="text-4xl font-bold">Pals variants {pals.length}</h1>
      <PalForm />
    </div>
  );
}
