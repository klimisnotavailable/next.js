import styles from "./CountriesOfCompaniesItem.module.css";

const CountriesOfCompaniesItem = ({ data}) => {
  return (
    <li className={`${styles.item}`}>
      {data.country} - {data.companies}
    </li>
  );
};

export default CountriesOfCompaniesItem;
