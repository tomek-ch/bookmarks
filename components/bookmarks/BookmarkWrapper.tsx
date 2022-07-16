import { useModal } from "../../hooks/useModal";
import { Bookmark } from "../../types/Bookmark";
import { Modal } from "../Modal";
import { BookmarkForm } from "./BookmarkForm";
import { BookmarkItem } from "./BookmarkItem";

interface BookmarkWrapperProps {
  bookmark: Bookmark;
}

export const BookmarkWrapper = ({ bookmark }: BookmarkWrapperProps) => {
  const modal = useModal();
  const remove = () => {};
  const update = () => {};

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
