import SearchPromotionField from "../SearchPromotionField/SearchPromotionField";
import AddPromotionButton from "../AddPromotionButton/AddPromotionButton";

const AddPromotionsForm = ({ openModal }) => {
  return (
    <div className={`flex justify-between mb-10`}>
      <SearchPromotionField></SearchPromotionField>
      <AddPromotionButton openModal={openModal}></AddPromotionButton>
    </div>
  );
};

export default AddPromotionsForm;
