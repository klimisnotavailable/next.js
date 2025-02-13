import Modal from "../Modal/Modal";
import styles from "./AddPromotionModal.module.css";
import IconUpload from "../../../../public/icons/icon-upload.svg";

const AddPromotionModal = ({ modalIsOpen, closeModal }) => {
  return (
    <Modal modalIsOpen={modalIsOpen} closeModal={closeModal}>
      <div className={`${styles.formContainer}`}>
        <h2 className="mb-7">Add promotion</h2>
        <form action="">
          <label className={`mb-5 ${styles.textInput}`} htmlFor="title-input">
            <p className="mb-2">Title</p>
            <input
              className={`${styles.input}`}
              type="text"
              name="title"
              id="title-input"
              placeholder="Title"
            />
          </label>
          <label
            className={`mb-5 ${styles.textInput}`}
            htmlFor="description-input"
          >
            <p className="mb-2">Description</p>
            <input
              className={`${styles.input}`}
              type="text"
              name="description"
              id="description-input"
              placeholder="Description"
            />
          </label>
          <label
            className={`mb-5 ${styles.textInput}`}
            htmlFor="discount-input"
          >
            <p className="mb-2">Discount amount</p>
            <input
              className={`${styles.input}`}
              type="text"
              name="discount"
              id="discount-input"
              placeholder="-40%"
            />
          </label>
          <label className={`mb-5 block`} htmlFor="image-input">
            <p className="mb-2">Image</p>
            <input
              className="visually-hidden"
              type="file"
              name="image"
              id="image-input"
              accept=".png, .jpg, .jpeg"
            />
            <div className={`${styles.fakeInput}`}>
              <IconUpload />
              <p>Upload photo</p>
            </div>
          </label>
          <button
            className={`bg-side-panel-bg text-text-light ${styles.addPromotionBtn}`}
            type="submit"
          >
            Add promotion
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default AddPromotionModal;
