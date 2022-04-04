import { Form, Formik } from "formik";
import { Button } from "../common/buttons/Button";
import { InputField } from "../common/InputField";

interface BookmarkFormProps {
  initialData?: { name: string; url: string };
  onSubmit: (data: { name: string; url: string }) => void;
  cancel: () => void;
}

export const BookmarkForm = ({
  initialData = { name: "", url: "" },
  onSubmit,
  cancel,
}: BookmarkFormProps) => {
  return (
    <Formik
      initialValues={initialData}
      onSubmit={(data, { setSubmitting }) => {
        onSubmit(data);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-3 items-start">
          <InputField name="name" label="Bookmark name" autoFocus />
          <InputField name="url" label="Url" />
          <div className="flex w-full justify-end gap-2">
            <Button onClick={cancel}>Cancel</Button>
            <Button type="submit" variant="primary" disabled={isSubmitting}>
              Save
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
