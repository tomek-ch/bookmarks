import type { NextPage } from "next";
import { BookmarkForm } from "../components/bookmarks/BookmarkForm";
import { BookmarkWrapper } from "../components/bookmarks/BookmarkWrapper";
import { FloatingButton } from "../components/common/buttons/FloatingButton";
import { PlusIcon } from "../components/icons/PlusIcon";
import { Modal } from "../components/Modal";
import { useModal } from "../hooks/useModal";
import { useProtectedRoute } from "../hooks/useProtectedRoute";
import { Bookmark } from "../types/Bookmark";

interface HomeProps {
  bookmarks: Bookmark[];
}

const Home: NextPage<HomeProps> = ({ bookmarks }) => {
  const modal = useModal();
  const create = () => {};
  useProtectedRoute();
  return (
    <div className="pb-8">
      <h1 className="text-xl mb-4">Your bookmarks:</h1>
      {bookmarks.map((item) => (
        <BookmarkWrapper key={item.id} bookmark={item} />
      ))}
      <FloatingButton onClick={modal.toggle}>
        <PlusIcon className="scale-150" />
      </FloatingButton>
      <Modal {...modal}>
        <BookmarkForm cancel={modal.toggle} onSubmit={create} />
      </Modal>
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
