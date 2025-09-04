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
                description={"Incoming Software DeveloperProject Lead for BluePrint 2026!"
                    + "\n\n"
                    + "Contributed to Blueprint's NPO recruitment as well as student recruitment." + 
                    + "Also manage a team of 10 developers, following agile methodologies, to assign and keep track of sprints as well as ensure collaboration " +
                    + "between our NPO partners and our team at Blueprint!"
                    + "\n\n"
                    + "More info coming soon!"
                }
                backgroundColor="dark"
            />

            <ContentSection
                imageSrc=""
                imageAlt="blueprint_dev"
                title="Developer @ BluePrint"
                description={"Blueprint is a certificed 501 c3 non-profit organization that provides free software development services to non-profits and social good organizations."
                    + "\n\n" 
                    + "I participated in building Full Stack application primarly based in React, Node.js, and NoSQL databases, and worked alongside fellow developers and designers to create user friendly and functional applications." + 
                    + "Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare."
                }
                backgroundColor="light"
            />  

            <ContentSection
                imageSrc=""
                imageAlt="icpc"
                title="Member @ ACM ICPC"
                description={"Took part as a member of ICPC's advanced coding track, where we practiced and expanded basic and advanced algorithmic tenchniques such as: "
                    + "Binary search, DP, greedy, graph algorithms, and more!"
                    + "\n\n" 
                    + "Additionally, I participated in UCLA's school wide competitive programming competition and was able to place 2nd in the division."
                }
                backgroundColor="dark"
            />
        </div>
    );
}
