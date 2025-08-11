// src/components/Navbar/Navbar.tsx
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarBrand}>
          <Link href="/" className={styles.brandLink}>
            Sanjay Krishna
          </Link>
        </div>
        <div className={styles.navbarMenu}>
          <Link href="/about" className={styles.navLink}>
            About Me
          </Link>
          <Link href="/experience" className={styles.navLink}>
            Experience
          </Link>
          <Link href="/projects" className={styles.navLink}>
            Projects
          </Link>
          <Link href="/clubs" className={styles.navLink}>
            Clubs
          </Link>
        </div>
      </div>
    </nav>
  );
}