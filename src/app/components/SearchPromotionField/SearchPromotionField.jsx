import styles from "./SearchPromotionField.module.css";
import IconGlass from "../../../../public/icons/magnifyingGlass.svg";

const SearchPromotionField = () => {
  return (
    <div className={`${styles.searchInputContainer}`}>
      <input
        type="text"
        placeholder="Search..."
        className={`${styles.searchInput}`}
      />
      <IconGlass></IconGlass>
    </div>
  );
};

export default SearchPromotionField;
