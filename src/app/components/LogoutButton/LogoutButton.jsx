import styles from "./LogoutButton.module.css";
import IconExit from "../../../../public/icons/icon-exit.svg";

const LogoutButton = () => {
  return (
    <button className={`flex items-center gap-4 ${styles.button}`}>
      <IconExit />
      Exit
    </button>
  );
};

export default LogoutButton;
