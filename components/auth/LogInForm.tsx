import { Form, Formik } from "formik";
import React from "react";
import { object, string } from "yup";
import { LogInDto } from "../../types/dto/LogInDto";
import { Button } from "../common/buttons/Button";
import { ErrorAlert } from "../common/ErrorAlert";
import { InputField } from "../common/InputField";

interface LogInFormProps {
  onSubmit: (data: LogInDto) => void;
  isLoading: boolean;
  error: string;
}

export const LogInForm = ({ onSubmit, isLoading, error }: LogInFormProps) => (
  <Formik
    initialValues={{ email: "", password: "" }}
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
    <Form noValidate className="flex flex-col gap-3 items-start">
      <InputField type="email" name="email" label="Email" autoFocus />
      <InputField type="password" name="password" label="Password" />
      <Button type="submit" variant="primary" disabled={isLoading}>
        Sign in
      </Button>
      <ErrorAlert>{error}</ErrorAlert>
    </Form>
  </Formik>
);
