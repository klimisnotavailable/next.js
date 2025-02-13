import SearchCompanyField from "../SearchCompanyField/SearchCompanyField";
import styles from "./CompaniesForm.module.css";
import AddCompanyButton from "../AddCompanyButton/AddCompanyButton";
import { usePathname } from "next/navigation";

const CompaniesForm = ({ openModal }) => {
  const pathname = usePathname();
  return (
    <div
      className={`
        ${styles.formContainer} 
        ${styles.onCompaniesPage}`}
    >
      <SearchCompanyField></SearchCompanyField>
      <AddCompanyButton openModal={openModal}></AddCompanyButton>
    </div>
  );
};

export default CompaniesForm;
