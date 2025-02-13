import Link from "next/link";
import styles from "./Navigation.module.css";
import Svg from "../../../../public/icons/icon-dashboard.svg";
import CompaniesIcon from "../../../../public/icons/icon-companies.svg";

const Navigation = () => {
  return (
    <nav className={`text-text-light flex flex-col ${styles.navList}`}>
      <Link className="flex gap-4 items-center" href={"/pages/dashboard"}>
        <Svg style={{ fill: "#fafafa" }} />
        Dashboard
      </Link>
      <Link className="flex gap-4 items-center" href={"/pages/companies"}>
        <CompaniesIcon style={{ fill: "#fafafa" }} />
        Companies
      </Link>
    </nav>
  );
};

export default Navigation;
