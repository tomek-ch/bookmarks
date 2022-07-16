import { Form, Formik } from "formik";
import { object, string } from "yup";
import { BookmarkDto } from "../../types/dto/BookmarkDto";
import { Button } from "../common/buttons/Button";
import { InputField } from "../common/InputField";

interface BookmarkFormProps {
  initialData?: BookmarkDto;
  onSubmit: (data: BookmarkDto) => void;
  cancel: () => void;
  isLoading: boolean;
}

export const BookmarkForm = ({
  initialData = { title: "", link: "" },
  onSubmit,
  cancel,
  isLoading,
}: BookmarkFormProps) => {
  return (
    <Formik
      initialValues={initialData}
      onSubmit={(data) => {
        onSubmit(data);
      }}
      validationSchema={object({
        title: string().required("Please provide a title"),
        link: string()
          .required("Please provide a url")
          .url(
            "Please provide a url in the following format: https://example.com"
          ),
      })}
    >
      {() => (
        <Form className="flex flex-col gap-3 items-start">
          <InputField name="title" label="Bookmark name" autoFocus />
          <InputField name="link" label="Url" />
          <div className="flex w-full justify-end gap-2">
            <Button onClick={cancel}>Cancel</Button>
            <Button type="submit" variant="primary" disabled={isLoading}>
              Save
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
