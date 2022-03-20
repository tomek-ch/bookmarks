import Link from "next/link";
import { BookMarkIcon } from "./BookMarkIcon";
import { UserNav } from "./UserNav";

export const Header = () => {
  return (
    <header className="py-3 items-center flex justify-between">
      <Link href="/">
        <a>
          <h1 className="flex gap-1 items-center">
            <BookMarkIcon />
            Bookmarks
          </h1>
        </a>
      </Link>
      <UserNav />
    </header>
  );
};
