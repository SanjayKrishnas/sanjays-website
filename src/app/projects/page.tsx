import ContentSection from "@/components/ContentSection/ContentSection";
import HeaderSection from "@/components/HeaderSection/HeaderSection"

export default function Projects() {
    return (
        <div>
            <HeaderSection
                title="PROJECTS"
                subtitle="MY PASSION PROJECTS!"
            />

            <ContentSection
                imageSrc=""
                imageAlt="noteflow"
                title="Noteflow.ai"
                description={"Placeholder"}
                backgroundColor="light"
            />

            <ContentSection
                imageSrc=""
                imageAlt="emgqwerty"
                title="EMG-to-QWERTY"
                description={"Placeholder"}
                backgroundColor="dark"
            />

            <ContentSection
                imageSrc=""
                imageAlt="multicore-cpu"
                title="RISC-V Multicore CPU"
                description={"Placeholder"}
                backgroundColor="light"
            />

            <ContentSection
                imageSrc=""
                imageAlt="bruinsqauds"
                title="BruinSquads"
                description={"Placeholder"}
                backgroundColor="dark"
            />

            <ContentSection
                imageSrc=""
                imageAlt="interviewapp"
                title="Mock Interview App"
                description={"Placeholder"}
                backgroundColor="light"
            />
        </div>
    );
}
