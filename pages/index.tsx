import type { NextPage } from "next";
import { BookmarkForm } from "../components/bookmarks/BookmarkForm";
import { Bookmarks } from "../components/bookmarks/Bookmarks";
import { BookmarkWrapper } from "../components/bookmarks/BookmarkWrapper";
import { FloatingButton } from "../components/common/buttons/FloatingButton";
import { PrivateRoute } from "../components/common/PrivateRoute";
import { PlusIcon } from "../components/icons/PlusIcon";
import { Modal } from "../components/Modal";
import { useModal } from "../hooks/useModal";

const Home: NextPage = () => {
  const modal = useModal();
  const create = () => {};

  return (
    <PrivateRoute>
      <div className="pb-8">
        <Bookmarks />
        <FloatingButton onClick={modal.toggle}>
          <PlusIcon className="scale-150" />
        </FloatingButton>
        <Modal {...modal}>
          <BookmarkForm cancel={modal.toggle} onSubmit={create} />
        </Modal>
      </div>
    </PrivateRoute>
  );
};

export default Home;
