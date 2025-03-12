import React from "react";
import { Link, useLocation } from "react-router-dom";

import { cocktailCodes } from "./const";
import styles from "./sidebar.module.css";

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className={styles.container}>
      {cocktailCodes.map((code) => {
        const isActive = location.pathname === code;

        return (
          <Link
            className={`${styles.link} ${isActive ? styles.active : ""}`}
            to={code}
            key={code}
          >
            <div className={styles.linkWrapper}>{code.substring(1)}</div>
          </Link>
        );
      })}
    </nav>
  );
};

export default Sidebar;
