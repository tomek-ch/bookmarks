import { Bookmark } from "../../types/Bookmark";
import { Button } from "../common/buttons/Button";

interface BookmarkItemProps {
  bookmark: Bookmark;
  edit: () => void;
  remove: () => void;
}

export const BookmarkItem = ({
  bookmark: { link, title },
  edit,
  remove,
}: BookmarkItemProps) => {
  return (
    <div className="flex shadow-md rounded-md mb-4 items-center">
      <a
        className="grow p-4 hover:text-blue-600 transition-all"
        href={link}
        target="_blank"
        rel="noopener"
      >
        {title}
      </a>
      <div className="mr-4 flex gap-2">
        <Button onClick={edit} variant="primary">
          Edit
        </Button>
        <Button onClick={remove}>Delete</Button>
      </div>
    </div>
  );
};
