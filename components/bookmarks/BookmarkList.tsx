import { Bookmark } from "../../types/Bookmark";
import { BookmarkWrapper } from "./BookmarkWrapper";

interface BookmarkListProps {
  bookmarks: Bookmark[];
}

export const BookmarkList = ({ bookmarks }: BookmarkListProps) => {
  if (bookmarks.length) {
    return (
      <>
        <h1 className="text-xl my-5">Your bookmarks:</h1>
        {bookmarks.map((item) => (
          <BookmarkWrapper key={item.id} bookmark={item} />
        ))}
      </>
    );
  }

  return <div>No bookmarks</div>;
};
