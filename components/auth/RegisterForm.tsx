import React from "react";
import { Formik, Form } from "formik";
import { object, string } from "yup";
import { Button } from "../common/buttons/Button";
import { InputField } from "../common/InputField";

export const RegisterForm = () => (
  <Formik
    initialValues={{ name: "", email: "", password: "" }}
    validateOnBlur={false}
    validateOnChange={false}
    validationSchema={object({
      name: string().required("Please enter your name"),
      email: string()
        .required("Please enter your email address")
        .email("Invalid email address"),
      password: string().required("Please provide a password"),
    })}
    onSubmit={(values, { setSubmitting }) => {
      console.log(values);
      setSubmitting(false);
    }}
  >
    {({ isSubmitting }) => (
      <Form className="flex flex-col gap-3 items-start">
        <InputField name="name" label="Name" autoFocus />
        <InputField type="email" name="email" label="Email" />
        <InputField type="password" name="password" label="Password" />
        <Button type="submit" variant="primary" disabled={isSubmitting}>
          Sign up
        </Button>
      </Form>
    )}
  </Formik>
);
