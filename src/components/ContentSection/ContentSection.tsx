// src/components/ContentSection/ContentSection.tsx
import Image from "next/image";
import styles from "./ContentSection.module.css";

interface ContentSectionProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  backgroundColor?: 'light' | 'dark';
}

export default function ContentSection({ 
  imageSrc, 
  imageAlt, 
  title, 
  description,
  backgroundColor = 'light'
}: ContentSectionProps) {
  return (
    <section className={`${styles.section} ${backgroundColor === 'dark' ? styles.darkBackground : styles.lightBackground}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Text on the left */}
          <div className={styles.textContainer}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
          </div>
          
          {/* Image on the right */}
          <div className={styles.imageContainer}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={400}
              height={400}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}