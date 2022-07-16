import { useMutation, useQueryClient } from "react-query";
import { removeBookmark } from "../../api/api";
import { useModal } from "../../hooks/useModal";
import { Bookmark } from "../../types/Bookmark";
import { Modal } from "../Modal";
import { BookmarkForm } from "./BookmarkForm";
import { BookmarkItem } from "./BookmarkItem";

interface BookmarkWrapperProps {
  bookmark: Bookmark;
}

export const BookmarkWrapper = ({ bookmark }: BookmarkWrapperProps) => {
  const queryClient = useQueryClient();
  const modal = useModal();
  const update = () => {};

  const { mutate: remove } = useMutation(() => removeBookmark(bookmark.id), {
    onSuccess() {
      queryClient.setQueryData<Bookmark[]>("bookmarks", (prev) =>
        (prev as Bookmark[]).filter(({ id }) => id !== bookmark.id)
      );
    },
  });

  return (
    <>
      <BookmarkItem bookmark={bookmark} edit={modal.toggle} remove={remove} />
      <Modal {...modal}>
        <BookmarkForm
          cancel={modal.toggle}
          initialData={bookmark}
          onSubmit={update}
          isLoading={false}
        />
      </Modal>
    </>
  );
};
