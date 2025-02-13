import styles from "./AppBar.module.css";
import Navigation from "../Navigation/Navigation";
import CompanyLogo from "../CompanyLogo/CompanyLogo";
import IconExit from "../../../../public/icons/icon-exit.svg";
import LogoutButton from "../LogoutButton/LogoutButton";

const AppBar = () => {
  return (
      <div className={`bg-side-panel-bg flex flex-col ${styles.appBar}`}>
        <CompanyLogo></CompanyLogo>
        <Navigation></Navigation>
        <LogoutButton></LogoutButton>
      </div>
  );
};

export default AppBar;
