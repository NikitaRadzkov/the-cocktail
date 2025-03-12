import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { cocktailCodes } from "./const";
import styles from "./sidebar.module.css";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.container}>
      <button className={styles.burger} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="5"
              y1="5"
              x2="19"
              y2="19"
              stroke="white"
              strokeWidth="2"
            />
            <line
              x1="5"
              y1="19"
              x2="19"
              y2="5"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="3" y1="6" x2="21" y2="6" stroke="white" strokeWidth="2" />
            <line
              x1="3"
              y1="12"
              x2="21"
              y2="12"
              stroke="white"
              strokeWidth="2"
            />
            <line
              x1="3"
              y1="18"
              x2="21"
              y2="18"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        )}
      </button>

      <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        {cocktailCodes.map((code) => {
          const isActive = location.pathname === code;
          return (
            <Link
              className={`${styles.link} ${isActive ? styles.active : ""}`}
              to={code}
              key={code}
              onClick={() => setIsOpen(false)}
            >
              <div className={styles.linkWrapper}>{code.substring(1)}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Sidebar;
