import Sidebar from "@/widgets/sidebar";

import styles from "./layout.module.css";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => (
  <div className={styles.container}>
    <Sidebar />
    <div className={styles.content}>{props.children}</div>
  </div>
);

export default Layout;
