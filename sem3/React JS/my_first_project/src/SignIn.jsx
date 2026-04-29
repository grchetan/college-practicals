import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
function SignIn() {
  // ✅ Initial Values
  const initialValues = {
    username: "",
  };

  // ✅ Submit Function
  const submitForm = (values) => {
    console.log("Form Data:", values);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={submitForm}
      >
        {(formik) => (
          <Form>
            <Field type="text" name="username" placeholder="Enter username" />

            <ErrorMessage name="username" component="span" className="error" />

            <br />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default SignIn;
