import Link from "next/link";
import styles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navLeft}>
        <div className={styles.logo}>
          <Link href='/'>
            <a>JAM BLOG</a>
          </Link>
        </div>
      </div>
      <div className={styles.navRight}>
        <Link href='/#'>
          <a>🔎</a>
        </Link>
        <Link href='/about'>
          <a>About</a>
        </Link>
        <Link href='/blog'>
          <a>Blog</a>
        </Link>
      </div>
    </nav>
  );
};
export default Nav;
