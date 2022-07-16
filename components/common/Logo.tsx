import { BookMarkIcon } from "../icons/BookMarkIcon";

interface LogoProps {
  large?: boolean;
}

export const Logo = ({ large }: LogoProps) => {
  return (
    <h1 className={`flex gap-1 items-center ${large ? "text-xl" : ""}`}>
      <BookMarkIcon {...(large ? { size: 20 } : {})} />
      Bookmarks
    </h1>
  );
};
