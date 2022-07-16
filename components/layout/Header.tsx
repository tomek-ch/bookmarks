import Link from "next/link";
import { Logo } from "../common/Logo";
import { UserNav } from "../layout/UserNav";

export const Header = () => {
  return (
    <header className="py-3 items-center flex justify-between">
      <Link href="/">
        <a className="block hover:text-blue-600 active:scale-95 transition-all">
          <Logo />
        </a>
      </Link>
      <UserNav />
    </header>
  );
};
