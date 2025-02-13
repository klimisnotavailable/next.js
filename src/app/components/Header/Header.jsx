"use client";

import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import UserMenu from "../UserMenu/UserMenu";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={`${styles.header}`}>
      <div className="container flex justify-between items-center">
        <h1 className={`text-text-main ${styles.pageTitle}`}>
          {(pathname.includes("companies") && "Companies") ||
            (pathname.includes("dashboard") && "Dashboard")}
        </h1>
        <UserMenu></UserMenu>
      </div>
    </header>
  );
};

export default Header;
