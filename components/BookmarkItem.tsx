import { Bookmark } from "../types/Bookmark";
import { Button } from "./Button";

export const BookmarkItem = ({ name, url }: Bookmark) => {
  const edit = () => {};
  const remove = () => {};

  return (
    <div className="flex shadow-md rounded-md mb-4 items-center">
      <a className="grow p-4" href={url} target="_blank" rel="noopener">
        {name}
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
