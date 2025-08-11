// src/components/HeaderSection/HeaderSection.tsx
import styles from "./HeaderSection.module.css";

interface HeaderSectionProps {
  title: string;
  subtitle: string;
}

export default function HeaderSection({ 
  title, 
  subtitle
}: HeaderSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      </div>
    </section>
  );
}