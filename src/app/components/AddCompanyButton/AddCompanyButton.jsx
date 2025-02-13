import styles from "./AddCompanyButton.module.css";

const AddCompanyButton = ({openModal}) => {
  return (
    <button
      className={`bg-side-panel-bg text-text-light ${styles.addCompanyBtn}`}
        onClick={()=>openModal()}
    >
      Add company
    </button>
  );
};

export default AddCompanyButton;
