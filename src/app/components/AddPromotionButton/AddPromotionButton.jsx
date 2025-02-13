import styles from "./AddPromotionButton.module.css"

const AddPromotionButton = ({openModal}) => {
  return (
    <button
      className={`bg-side-panel-bg text-text-light ${styles.addPromotionBtn}`}
      onClick={() => openModal()}
    >
      Add promotion
    </button>
  );
};

export default AddPromotionButton;
