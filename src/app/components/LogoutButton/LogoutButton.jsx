"use client";
import styles from "./LogoutButton.module.css";
import IconExit from "../../../../public/icons/icon-exit.svg";
import { logout } from "@/redux/auth/operations";
import { useDispatch } from "react-redux";

const LogoutButton = () => {
  const dispatch = useDispatch();

  return (
    <button
      className={`flex items-center gap-4 ${styles.button}`}
      onClick={() => dispatch(logout())}
    >
      <IconExit />
      Exit
    </button>
  );
};

export default LogoutButton;
