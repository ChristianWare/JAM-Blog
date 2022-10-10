import styles from "../styles/Layout.module.css";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.layout}>
        <Nav />
        {children}
      </div>
    </>
  );
};

export default Layout;
