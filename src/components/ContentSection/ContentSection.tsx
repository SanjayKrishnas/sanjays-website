// src/components/ContentSection/ContentSection.tsx
import Image from "next/image";
import styles from "./ContentSection.module.css";

interface ContentSectionProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  backgroundColor?: 'white' | 'light'; // Optional prop to control background
}

export default function ContentSection({ 
  imageSrc, 
  imageAlt, 
  title, 
  description,
  backgroundColor = 'white'
}: ContentSectionProps) {
  return (
    <section className={`${styles.section} ${backgroundColor === 'light' ? styles.lightBackground : styles.whiteBackground}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Image on the left */}
          <div className={styles.imageContainer}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={400}
              height={300}
              className={styles.image}
            />
          </div>
          
          {/* Text on the right */}
          <div className={styles.textContainer}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}