import { BookMarkIcon } from "./BookMarkIcon";
import { UserNav } from "./UserNav";

export const Header = () => {
  return (
    <header className="py-3 items-center flex justify-between">
      <h1 className="flex gap-1 items-center">
        <BookMarkIcon />
        Bookmarks
      </h1>
      <UserNav />
    </header>
  );
};
