"use client";
import styles from "./AppBar.module.css";
import Navigation from "../Navigation/Navigation";
import CompanyLogo from "../CompanyLogo/CompanyLogo";
import IconExit from "../../../../public/icons/icon-exit.svg";
import LogoutButton from "../LogoutButton/LogoutButton";
import { auth } from "@/firebase/config";
import { selectIsLoggedIn } from "@/redux/auth/selectors";
import { useSelector } from "react-redux";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div
      className={`bg-side-panel-bg flex flex-col ${styles.appBar} ${
        isLoggedIn ? "" : "hidden"
      }`}
    >
      <CompanyLogo></CompanyLogo>
      <Navigation></Navigation>
      <LogoutButton></LogoutButton>
    </div>
  );
};

export default AppBar;
