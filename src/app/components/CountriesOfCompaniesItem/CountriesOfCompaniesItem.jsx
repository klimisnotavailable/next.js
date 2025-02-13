import styles from "./CountriesOfCompaniesItem.module.css";

const CountriesOfCompaniesItem = ({ data, idx }) => {
  return (
    <li className={`${styles.item}`} key={idx}>
      {data.country} - {data.companies}
    </li>
  );
};

export default CountriesOfCompaniesItem;
