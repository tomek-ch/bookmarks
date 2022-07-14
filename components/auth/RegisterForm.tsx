import React from "react";
import { Formik, Form } from "formik";
import { object, string } from "yup";
import { Button } from "../common/buttons/Button";
import { InputField } from "../common/InputField";
import { RegisterDto } from "../../types/dto/RegisterDto";
import { ErrorAlert } from "../common/ErrorAlert";

interface RegisterFormProps {
  onSubmit: (data: RegisterDto) => void;
  isLoading: boolean;
  error: string;
}

export const RegisterForm = ({
  onSubmit,
  isLoading,
  error,
}: RegisterFormProps) => (
  <Formik
    initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
    validateOnBlur={false}
    validateOnChange={false}
    validationSchema={object({
      email: string()
        .required("Please enter your email address")
        .email("Invalid email address"),
      password: string().required("Please provide a password"),
    })}
    onSubmit={onSubmit}
  >
    {() => (
      <Form className="flex flex-col gap-3 items-start">
        <InputField name="firstName" label="First name" autoFocus />
        <InputField name="lastName" label="Last name" autoFocus />
        <InputField type="email" name="email" label="Email" />
        <InputField type="password" name="password" label="Password" />
        <Button type="submit" variant="primary" disabled={isLoading}>
          Sign up
        </Button>
        <ErrorAlert>{error}</ErrorAlert>
      </Form>
    )}
  </Formik>
);
