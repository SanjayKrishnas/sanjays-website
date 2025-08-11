// src/app/page.tsx
import ContentSection from "../components/ContentSection/ContentSection";
import HeaderSection from "../components/HeaderSection/HeaderSection"

export default function Home() {
  return (
    <div>
      {/* Heder for main page */}
      <HeaderSection
        title="SANJAY KRISHNA"
        subtitle="WELCOME TO MY PORTFOLIO!"
      />

      {/* Section 1 - Light brown background */}
      <ContentSection
        imageSrc="/placeholder-image1.jpg"
        imageAlt="About me illustration"
        title="Who am I?"
        description={
          "Hi there, my name is Sanjay! I'm a current Junior studying Computer Science & Engineering " +
          "at the University of California, Los Angeles (UCLA) and my interests include: Web Dev, " +
          "creating client facing AI and ML tools, Tech for Social Good, Research in the fields of " +
          "AI for large scale Data Analysis, and working on projects that can actually make an impact " +
          "on the world (just to name a few!).\n\n" +
          "Aside from school and tech, I really enjoy listening to music to cool me down and relax, " +
          "watching anime and reading in my spare time which is a habit I've had since my childhood, " +
          "and learning more about modern events in the world and how fast things can change as time goes on."
        }
        backgroundColor="light"
      />

      {/* Section 2 - Brown background */}
      <ContentSection
        imageSrc="/placeholder-image2.jpg" // Replace with your actual image path
        imageAlt="My projects showcase"
        title="Building Amazing Projects"
        description="Over the years, I've worked on various projects ranging from e-commerce platforms to data visualization tools. Each project teaches me something new and helps me grow as a developer. I'm always excited to take on new challenges."
        backgroundColor="dark"
      />

      {/* Section 3 - Light brown background */}
      <ContentSection
        imageSrc="/placeholder-image3.jpg" // Replace with your actual image path
        imageAlt="Technology stack"
        title="Modern Technology Stack"
        description="I work with cutting-edge technologies including React, Next.js, Node.js, and various databases. Staying up-to-date with the latest trends and best practices is important to me, ensuring I deliver high-quality, maintainable code."
        backgroundColor="light"
      />
    </div>
  );
}