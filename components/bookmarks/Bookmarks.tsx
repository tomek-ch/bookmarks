import { useQuery } from "react-query";
import { getBookmarks } from "../../api/api";
import { Bookmark } from "../../types/Bookmark";
import { User } from "../../types/User";
import { Alert } from "../common/Alert";
import { BookmarkList } from "./BookmarkList";
import { BookmarkListSkeleton } from "./BookmarkListSkeleton";

export const Bookmarks = () => {
  const { data: user } = useQuery<User | null>("currentUser");
  const { data, isLoading } = useQuery<Bookmark[]>(
    ["bookmarks", user?.id],
    getBookmarks,
    {
      enabled: !!user,
    }
  );

  if (isLoading) {
    return <BookmarkListSkeleton />;
  }

  if (data) {
    return <BookmarkList bookmarks={data} />;
  }

  return <Alert variant="danger">Error fetching bookmarks</Alert>;
};
