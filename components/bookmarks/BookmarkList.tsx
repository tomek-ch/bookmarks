import { Bookmark } from "../../types/Bookmark";
import { Alert } from "../common/Alert";
import { InlineLink } from "../common/InlineLink";
import { BookmarkWrapper } from "./BookmarkWrapper";

interface BookmarkListProps {
  bookmarks: Bookmark[];
  openModal: () => void;
}

export const BookmarkList = ({ bookmarks, openModal }: BookmarkListProps) => {
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

  return (
    <Alert>
      No bookmarks. <InlineLink onClick={openModal}>Create one</InlineLink>
    </Alert>
  );
};
