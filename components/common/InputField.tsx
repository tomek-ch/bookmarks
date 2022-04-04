import { ErrorMessage, Field } from "formik";

interface InputFieldProps {
  type?: "text" | "email" | "password" | "url";
  autoFocus?: boolean;
  name: string;
  label: string;
}

export const InputField = ({
  type = "text",
  name,
  label,
  autoFocus,
}: InputFieldProps) => {
  return (
    <div className="w-full">
      <label>
        {label}
        <Field
          type={type}
          name={name}
          autoFocus={autoFocus}
          className={`
            block mt-1 w-full p-3 leading-4 rounded-md bg-gray-200 outline-none
            hover:bg-gray-300 transition-all
            focus:outline-2 focus:outline-blue-500 outline-offset-0
          `}
        />
      </label>
      <ErrorMessage name={name} component="div" className="text-red-600 mt-1" />
    </div>
  );
};
