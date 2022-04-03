import { Form, Formik } from "formik";
import { Button } from "../common/buttons/Button";
import { InputField } from "../common/InputField";

interface BookmarkFormProps {
  initailData?: { name: string; url: string };
  onSubmit: (data: { name: string; url: string }) => void;
}

export const BookmarkForm = ({
  initailData = { name: "", url: "" },
  onSubmit,
}: BookmarkFormProps) => {
  return (
    <Formik initialValues={initailData} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-3 items-start">
          <InputField name="name" label="Bookmark name" autoFocus />
          <InputField name="url" label="Url" />
          <Button variant="primary" disabled={isSubmitting}>
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};
