import styles from "./SearchCompanyField.module.css";
import IconGlass from "../../../../public/icons/magnifyingGlass.svg";

const SearchCompanyField = () => {
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

export default SearchCompanyField;
