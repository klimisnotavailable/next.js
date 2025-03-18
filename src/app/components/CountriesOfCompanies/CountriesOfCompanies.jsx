import data from "./data";
import styles from "./CountriesOfCompanies.module.css";
import CountriesOfCompaniesItem from "../CountriesOfCompaniesItem/CountriesOfCompaniesItem";
import World from "../../../../public/icons/icon-world.svg";

const CountriesOfCompanies = () => {
  return (
    <div className={`${styles.countriesContainer}`}>
      <h2 className={`${styles.listName} `}>Countries of companies</h2>
      <div className="flex justify-between">
        <ul className={`${styles.list}`}>
          {data.map((item, idx) => {
            return <CountriesOfCompaniesItem key={idx} data={item} />;
          })}
        </ul>
        <World></World>
      </div>
    </div>
  );
};

export default CountriesOfCompanies;
