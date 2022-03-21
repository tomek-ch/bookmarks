import { Form, Formik } from "formik";
import React from "react";
import { object, string } from "yup";
import { Button } from "../common/buttons/Button";
import { InputField } from "../common/InputField";

export const LogInForm = () => (
  <div>
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={object({
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
          <InputField type="email" name="email" label="Email" />
          <InputField type="password" name="password" label="Password" />
          <Button variant="primary" disabled={isSubmitting}>
            Sign in
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);
