import HeaderSection from "@/components/HeaderSection/HeaderSection"
import ContentSection from "@/components/ContentSection/ContentSection"

export default function Clubs() {

    return (
        <div>
            <HeaderSection
                title="MY CLUBS"
                subtitle="MY HOBBIES OUTSIDE OF SCHOOL"
            />

            <ContentSection
                imageSrc=""
                imageAlt="blueprint_pl"
                title="Project Lead @ BluePrint"
                description={"Placeholder"}
                backgroundColor="dark"
            />

            <ContentSection
                imageSrc=""
                imageAlt="blueprint_dev"
                title="Developer @ BluePrint"
                description={"Placeholder"}
                backgroundColor="light"
            />

            <ContentSection
                imageSrc=""
                imageAlt="icpc"
                title="Member @ ACM ICPC"
                description={"Placeholder"}
                backgroundColor="dark"
            />

            <ContentSection
                imageSrc=""
                imageAlt="cyber"
                title="Member @ ACM Cyber"
                description={"Placeholder"}
                backgroundColor="light"
            />
        </div>
    );
}
