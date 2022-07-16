import { useMutation, useQueryClient } from "react-query";
import { removeBookmark, updateBookmark } from "../../api/api";
import { useModal } from "../../hooks/useModal";
import { Bookmark } from "../../types/Bookmark";
import { BookmarkDto } from "../../types/dto/BookmarkDto";
import { Modal } from "../Modal";
import { BookmarkForm } from "./BookmarkForm";
import { BookmarkItem } from "./BookmarkItem";

interface BookmarkWrapperProps {
  bookmark: Bookmark;
}

export const BookmarkWrapper = ({ bookmark }: BookmarkWrapperProps) => {
  const queryClient = useQueryClient();
  const modal = useModal();

  const { mutate: remove } = useMutation(() => removeBookmark(bookmark.id), {
    onSuccess() {
      queryClient.setQueryData<Bookmark[]>("bookmarks", (prev) =>
        (prev as Bookmark[]).filter(({ id }) => id !== bookmark.id)
      );
    },
  });

  const { mutate: update } = useMutation(
    (data: BookmarkDto) => updateBookmark(bookmark.id, data),
    {
      onSuccess(data) {
        modal.toggle();
        queryClient.setQueryData<Bookmark[]>("bookmarks", (prev) =>
          (prev as Bookmark[]).map((item) =>
            item.id === bookmark.id ? data : item
          )
        );
      },
    }
  );

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
