import styles from "./UserMenu.module.css";

const UserMenu = () => {
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
        <p className={`${styles.username}`}>Adam Smith</p>
        <p className={`${styles.usermail}`}>adamsmth@gmail.com</p>
      </div>
    </div>
  );
};

export default UserMenu;
