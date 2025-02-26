import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (

    <div>Hi
      <Link href={'/dashboard'}>
      <Button>Click</Button>
      <UserButton />
      </Link>
    </div>
  );
}
