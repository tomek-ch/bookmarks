import type { NextPage } from "next";
import { BookmarkItem } from "../components/bookmarks/BookmarkItem";
import { Bookmark } from "../types/Bookmark";

interface HomeProps {
  bookmarks: Bookmark[];
}

const Home: NextPage<HomeProps> = ({ bookmarks }) => {
  return (
    <>
      <h1 className="text-xl mb-4">Your bookmarks:</h1>
      {bookmarks.map((item) => (
        <BookmarkItem key={item.id} {...item} />
      ))}
    </>
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
