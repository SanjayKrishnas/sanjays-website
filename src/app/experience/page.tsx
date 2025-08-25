import ContentSection from "@/components/ContentSection/ContentSection";
import HeaderSection from "@/components/HeaderSection/HeaderSection"

export default function Experience() {
    
    return (
        <div>
            <HeaderSection
                title="INTERNSHIPS"
                subtitle="A LOOK INTO MY PAST EXPERIENCES"
            />

            <ContentSection
                imageSrc=""
                imageAlt="NeoQuortex"
                title="Software Engineering Intern @ NeoQuortex"
                description={"PLACEHOLDER"
                }
                backgroundColor="dark"
            />

            <ContentSection
                imageSrc=""
                imageAlt="EndOverdose"
                title="Software Development Engineer @ EndOvedose"
                description={"PLACEHOLDER"
                }
                backgroundColor="light"
            />

            <ContentSection
                imageSrc=""
                imageAlt="Cyber"
                title="Software Engineering Intern @ ACM Cyber Labs"
                description={"PLACEHOLDER"
                }
                backgroundColor="dark"
            />

            <HeaderSection
                title="RESEARCH"
                subtitle="WHAT INTERESTS ME"
            />

            <ContentSection
                imageSrc=""
                imageAlt="StarAI"
                title="Deep Learning/LLM Researcher @ StarAI Labs"
                description={"PLACEHOLDER"
                }
                backgroundColor="light"
            />
            
        </div>
    );
}
