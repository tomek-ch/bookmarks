import type { NextPage } from "next";
import { BookmarkItem } from "../components/bookmarks/BookmarkItem";
import { FloatingButton } from "../components/common/buttons/FloatingButton";
import { PlusIcon } from "../components/icons/PlusIcon";
import { Bookmark } from "../types/Bookmark";

interface HomeProps {
  bookmarks: Bookmark[];
}

const Home: NextPage<HomeProps> = ({ bookmarks }) => {
  return (
    <div className="pb-8">
      <h1 className="text-xl mb-4">Your bookmarks:</h1>
      {bookmarks.map((item) => (
        <BookmarkItem key={item.id} {...item} />
      ))}
      <FloatingButton>
        <PlusIcon className="scale-150" />
      </FloatingButton>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  return {
    props: {
      bookmarks: [
        { id: 1, name: "Google", url: "https://google.com" },
        { id: 2, name: "YouTube", url: "https://youtube.com" },
      ],
    },
  };
}
