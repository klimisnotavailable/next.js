"use client";
import styles from "./SignInForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { login } from "@/redux/auth/operations";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import schema from "./validationSchema";
import initialValues from "./initialValues";

const SignInForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(login(values));
  };

  return (
    <div className={`${styles.formContainer}`}>
      <h2 className={`${styles.formName}`}>Sign In</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form className={`${styles.form}`}>
          <label htmlFor="email">
            Email
            <Field
              name={"email"}
              required={true}
              className={`${styles.input}`}
              type="email"
              placeholder="Email"
              id="email"
            />
            <ErrorMessage name="email" />
          </label>
          <label htmlFor="password">
            Password
            <Field
              name={"password"}
              required={true}
              className={`${styles.input}`}
              type="password"
              placeholder="Password"
              id="password"
              autoComplete={"true"}
            />
            <ErrorMessage name="password" />
          </label>
          <button className={`${styles.submitBtn}`} type="submit">
            Sign In
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignInForm;
