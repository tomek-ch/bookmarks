import type { NextPage } from "next";
import { useMutation, useQueryClient } from "react-query";
import { createBookmark } from "../api/api";
import { BookmarkForm } from "../components/bookmarks/BookmarkForm";
import { Bookmarks } from "../components/bookmarks/Bookmarks";
import { FloatingButton } from "../components/common/buttons/FloatingButton";
import { PrivateRoute } from "../components/common/PrivateRoute";
import { PlusIcon } from "../components/icons/PlusIcon";
import { Modal } from "../components/Modal";
import { useModal } from "../hooks/useModal";
import { Bookmark } from "../types/Bookmark";

const Home: NextPage = () => {
  const modal = useModal();
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(createBookmark, {
    onSuccess(data) {
      modal.toggle();
      queryClient.setQueryData<Bookmark[]>("bookmarks", (prev) => [
        ...(prev as Bookmark[]),
        data,
      ]);
    },
  });

  return (
    <PrivateRoute>
      <div className="pb-8">
        <Bookmarks openModal={modal.toggle} />
        <FloatingButton onClick={modal.toggle}>
          <PlusIcon className="scale-150" />
        </FloatingButton>
        <Modal {...modal}>
          <BookmarkForm
            cancel={modal.toggle}
            onSubmit={mutate}
            isLoading={isLoading}
          />
        </Modal>
      </div>
    </PrivateRoute>
  );
};

export default Home;
