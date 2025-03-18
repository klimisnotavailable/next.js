"use client";
import styles from "./AddCompanyModal.module.css";
import IconUpload from "../../../../public/icons/icon-upload.svg";
import Modal from "../Modal/Modal";
import { Formik, Form, Field } from "formik";
import initialValues from "./initialValues";
import { useDispatch } from "react-redux";
import { addCompany } from "@/redux/companies/operations";

const AddCompanyModal = ({ modalIsOpen, closeModal }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    try {
      const response = dispatch(addCompany(values));
      return response;
    } catch (error) {
      return error.message;
    }
  };

  return (
    <Modal modalIsOpen={modalIsOpen} closeModal={closeModal}>
      <div className={`${styles.fromContainer}`}>
        <h2 className={`${styles.formName}`}>Add new company</h2>
        <Formik onSubmit={handleSubmit}>
          <Form className={styles.form}>
            <div className="flex flex-col justify-between">
              <label
                htmlFor="avatar-input"
                className={`flex gap-5  ${styles.avatarInput}`}
              >
                <p>Logo</p>
                <Field
                  className={`visually-hidden`}
                  name="avatar"
                  id="avatar-input"
                  type="file"
                  accept=".png, .jpg, .jpeg"
                />
                <div className={`${styles.fakeInput}`}>
                  <IconUpload />
                  <p>Upload photo</p>
                </div>
              </label>
              <label
                className={`flex flex-col gap-2 ${styles.inputLabel}`}
                htmlFor="status-input"
              >
                <p>Status</p>
                <Field
                  requried="true"
                  className={`${styles.textInput}`}
                  type="text"
                  name="status"
                  id="status-input"
                  placeholder="Status"
                />
              </label>
              <label
                className={`flex flex-col gap-2 ${styles.inputLabel}`}
                htmlFor="country-input"
              >
                <p>Country</p>
                <Field
                  requried="true"
                  className={`${styles.textInput}`}
                  type="text"
                  name="country"
                  id="country-input"
                  placeholder="Country"
                />
              </label>
            </div>
            <div className="flex flex-col gap-5">
              <label
                className={`flex flex-col gap-2 ${styles.inputLabel}`}
                htmlFor="name-input"
              >
                <p>Name</p>
                <Field
                  requried="true"
                  className={`${styles.textInput}`}
                  type="text"
                  name="name"
                  id="name-input"
                  placeholder="Name"
                />
              </label>
              <label
                className={`flex flex-col gap-2 ${styles.inputLabel}`}
                htmlFor="category-input"
              >
                <p>Category</p>
                <Field
                  requried="true"
                  className={`${styles.textInput}`}
                  type="text"
                  name="category"
                  id="category-input"
                  placeholder="Category"
                />
              </label>
              <label
                className={`flex flex-col gap-2 ${styles.inputLabel}`}
                htmlFor="joined-input"
              >
                <p>Joined data</p>
                <Field
                  requried="true"
                  className={`${styles.textInput}`}
                  type="text"
                  name="joined"
                  id="joined-input"
                  placeholder={"Data"}
                />
              </label>
              <label
                className={`flex flex-col gap-2 ${styles.inputLabel}`}
                htmlFor="description-input"
              >
                <p>Description</p>
                <Field
                  requried="true"
                  className={`${styles.textInput}`}
                  type="text"
                  name="description"
                  id="description-input"
                  placeholder="Description"
                />
              </label>
            </div>
            <button
              className={`w-full text-center bg-side-panel-bg text-text-light ${styles.submitBtn}`}
              type="submit"
            >
              Add company
            </button>
          </Form>
        </Formik>
      </div>
    </Modal>
  );
};

export default AddCompanyModal;
