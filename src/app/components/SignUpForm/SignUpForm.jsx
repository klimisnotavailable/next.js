"use client";
import styles from "./SignUpForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import initialValues from "./initialValues";
import schema from "./validationSchema";
import Link from "next/link";
import { register } from "@/redux/auth/operations";

const SignUpForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
  };

  return (
    <div className={`${styles.formContainer}`}>
      <h2 className={`${styles.formName}`}>Sign Up</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form className={`${styles.form}`}>
          <label htmlFor="name">
            Name
            <Field
              name={"name"}
              required={true}
              className={`${styles.input}`}
              type="text"
              placeholder="Name"
              id="name"
            />
            <ErrorMessage name="name" />
          </label>
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
              autoComplete="on"
            />
            <ErrorMessage name="password" />
          </label>
          <button className={`${styles.submitBtn}`} type="submit">
            Sign Up
          </button>
        </Form>
      </Formik>
      <p className={`${styles.haveAccount}`}>
        Already have account?{" "}
        <Link className={`${styles.navLink}`} href={"/auth/sign-in"}>
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUpForm;
