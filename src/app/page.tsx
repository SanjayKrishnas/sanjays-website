// src/app/page.tsx
import ContentSection from "../components/ContentSection/ContentSection";

export default function Home() {
  return (
    <div>
      {/* Section 1 - White background */}
      <ContentSection
        imageSrc="/placeholder-image1.jpg" // Replace with your actual image path
        imageAlt="About me illustration"
        title="Welcome to My Portfolio"
        description="I'm a passionate full-stack developer with experience in modern web technologies. 
        I love creating innovative solutions that make a real impact. From React applications to backend systems, 
        I enjoy the entire development process. I'm a passionate full-stack developer with experience in modern web technologies. 
        I love creating innovative solutions that make a real impact. From React applications to backend systems, 
        I enjoy the entire development process."
        backgroundColor="white"
      />

      {/* Section 2 - Light background */}
      <ContentSection
        imageSrc="/placeholder-image2.jpg" // Replace with your actual image path
        imageAlt="My projects showcase"
        title="Building Amazing Projects"
        description="Over the years, I've worked on various projects ranging from e-commerce platforms to data visualization tools. Each project teaches me something new and helps me grow as a developer. I'm always excited to take on new challenges."
        backgroundColor="light"
      />

      {/* Section 3 - White background */}
      <ContentSection
        imageSrc="/placeholder-image3.jpg" // Replace with your actual image path
        imageAlt="Technology stack"
        title="Modern Technology Stack"
        description="I work with cutting-edge technologies including React, Next.js, Node.js, and various databases. Staying up-to-date with the latest trends and best practices is important to me, ensuring I deliver high-quality, maintainable code."
        backgroundColor="white"
      />
    </div>
  );
}