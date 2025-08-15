// src/app/page.tsx
import ContentSection from "@/components/ContentSection/ContentSection";
import HeaderSection from "@/components/HeaderSection/HeaderSection"

export default function Home() {
  const socialsImage = "/images/Socials.jpg"
  
  return (
    <div>
      {/* Heder for main page */}
      <HeaderSection
        title="SANJAY KRISHNA"
        subtitle="WELCOME TO MY PORTFOLIO!"
      />

      {/* Section 1 - Light brown background */}
      <ContentSection
        imageSrc="/sanjays-website/images/sanjay-image.jpg"
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
        imageSrc={socialsImage} 
        imageAlt="My projects showcase"
        title="My Socials!"
        description={`
          <p style="margin: 0 0 1px 0; line-height: 0.8;">Connect with me:</p>
          <ul style="list-style: none; padding: 0; margin: 0; line-height: 0.8;">
            <li style="margin: 0; padding: 0; line-height: 0.8;">
              <a href="https://www.linkedin.com/in/sanjay-s-krishna" target="_blank" rel="noopener noreferrer" style="color: #0077b5; text-decoration: none; font-weight: bold; line-height: 0.8;">
                🔗 LinkedIn
              </a>
            </li>
            <li style="margin: 0; padding: 0; line-height: 0.8;">
              <a href="https://github.com/SanjayKrishnas" target="_blank" rel="noopener noreferrer" style="color: #333; text-decoration: none; font-weight: bold; line-height: 0.8;">
                💻 GitHub
              </a>
            </li>
            <li style="margin: 0; padding: 0; line-height: 0.8;">
              <a href="mailto:sanjayskrishna05@gmail.com" style="color: #ea4335; text-decoration: none; font-weight: bold; line-height: 0.8;">
                📧 Email
              </a>
            </li>
          </ul>
        `}
        backgroundColor="dark"
      />
      
    </div>
  );
}