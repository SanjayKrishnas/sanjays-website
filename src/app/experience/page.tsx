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
                description={"Member of the AI Simulation team which is responsible for modeling quantum systems using deep learning" +
                    " and neural network architectures. I developed and iterated on a ResNet based architecture which modeled quantum energy minimization, and achieved a " + 
                    "34% lower ground state energy with faster convergence time when compared to a classical quantum computer implementation." + 
                    "\n\n I also manage over $15000 in AWS cloud credits and orchestrate containerized deployments through ECS, EC2, and ECR for scalable application hosting." +
                    "Currently I'm working on creating a quantum chemistry dataset which will be used by the Simulation team to perform further experiments on ground state minimization " + 
                    "in the scope of chemical systems."
                }
                backgroundColor="dark"
            />

            <ContentSection
                imageSrc=""
                imageAlt="EndOverdose"
                title="Software Development Engineer @ EndOvedose"
                description={"Developed a full-stack web application for EndOverdose, which provided high school and middle school students an engaging learning platform to teach them about " + 
                    "EndOverdose's mission. This comprised of translating Figma designs into real React components, architecting backend database schemas for Users and Admin, and collaborating with " +
                    "cross-functional UX designers and developers while following Agile methodologies." + 
                    "\n\n" + 
                    "Particularly I worked on database querying time and refresh latency, making query times for student scores/averages over 50% faster by refactoring student schema in Firestore. As well as " + 
                    "migrating from Redux to Zustand which saw a 20% performance increase in latency for user profile pages. The final platform is released to over 3 school districts and 3000+ students across Southern California " + 
                    "and uses interactice lessons, videos, games, and tests, to teach overdose preventation and further EndOverdose's mission."
                }
                backgroundColor="light"
            />

            <ContentSection
                imageSrc=""
                imageAlt="Cyber"
                title="Software Engineering Intern @ ACM Cyber Labs"
                description={"At Cyber Labs I worked primarily as a backend developer and established the connection between our Ethereum based smart contracts and our backend services." + 
                    "I developed and tested smart contracts, via Ethereum, which acted as secure package managers to safely share software across the internet. I also decreased latency times " + 
                    "of smart contract reading by imporving Flask REST API endpoints which interfaced our contracts, which saw an overral performance increase of over 35%. The final paper and application " + 
                    "was submitted to the 2024 IEEE MIT Undergraduate Research Technology Conference."
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
                description={"Under the provision of Dr. Guy Van den broeck, I worked on LLM optimizations, benchmarking systems, tokenizations, as well as Natural Language Processing." + 
                    "Working with Google's Gemma-2-2b mathematical reasoning model, I was able to reduce the number of trainable parameters from 2b to 120M while maintaining the 90% performance and accuracy compared to other fine-tuning methods." +
                    "Also in the space of tokenizations, I processed a test corpus using Bype Pair Encoding (BPE) and ran tests across a variety of tokenizers." 
                }
                backgroundColor="light"
            />
            
        </div>
    );
}
