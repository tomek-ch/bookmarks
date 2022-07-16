import { useQuery } from "react-query";
import { getBookmarks } from "../../api/api";
import { Bookmark } from "../../types/Bookmark";
import { User } from "../../types/User";
import { BookmarkList } from "./BookmarkList";

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
    return <div>Loading...</div>;
  }

  if (data) {
    return <BookmarkList bookmarks={data} />;
  }

  return <div>Error fetching bookmarks</div>;
};
