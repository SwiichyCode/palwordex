import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function LoginPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Button>
        <Link href="/api/auth/signin">Login</Link>
      </Button>
    </div>
  );
}
