"use client"
import { selectUser } from "@/redux/auth/selectors";
import styles from "./UserMenu.module.css";
import { useSelector } from "react-redux";

const UserMenu = () => {
  const user = useSelector(selectUser)
  return (
    <div className={`${styles.authNavContainer} flex items-center gap-3`}>
      <img
        className={`${styles.userphoto}`}
        src="#"
        alt=""
        width={44}
        height={44}
      />
      <div>
        <p className={`${styles.username}`}>{user.name}</p>
        <p className={`${styles.usermail}`}>{user.email}</p>
      </div>
    </div>
  );
};

export default UserMenu;
