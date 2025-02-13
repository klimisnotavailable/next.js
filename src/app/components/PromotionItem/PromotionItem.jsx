import IconYes from "../../../../public/icons/icon-yes.svg";
import IconNo from "../../../../public/icons/icon-no.svg";
import styles from "./PromotionItem.module.css";

const PromotionItem = ({ promotion }) => {
  return (
    <p
      className={`flex items-center gap-2 ${styles.item} ${
        promotion ? "text-green-700" : "text-red-700"
      }`}
    >
      {promotion ? <IconYes /> : <IconNo />}
      {promotion ? "Yes" : "No"}
    </p>
  );
};

export default PromotionItem;
