import styles from "./CompanyLogo.module.css";
import Icon from "../../../../public/icons/CompanyLogo.svg";
import Link from "next/link";

const CompanyLogo = () => {
  return (
    <Link className={`text-text-light ${styles.logo}`} href="/">
      <Icon className={`${styles.icon}`} style={{ fill: "#ffffff" }} />
      TruScape
    </Link>
  );
};

export default CompanyLogo;
