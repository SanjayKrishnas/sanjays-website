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
                description={"INCOMING SOON!"
                    + "\n\n"
                    + "Noteflow.ai is a web application that allows users to create, edit, and share notes via Google Docs and get customaizable and powerful support from an AI agent on the side!"
                }
                backgroundColor="light"
            />

            <ContentSection
                imageSrc=""
                imageAlt="emgqwerty"
                title="EMG-to-QWERTY"
                description={"Explored deep learning approaches to decode typing intent from surface EMG (sEMG) signals collected from the wrists. " +
                    "I developed and optimized a GRU + CNN hybrid architecture which outperformed Meta's published baseline by 6%, reducing error rate from 29.74% to 23.04%. " +
                    "Beyond this, I experimented with a range of architectures including LSTMs, Transformer-based models, ResNet-GRU, and Conformer-GRU to evaluate tradeoffs in accuracy and efficiency. " +
                    "\n\nThis project demonstrates the potential of combining computer vision-inspired architectures with sequential modeling for neural decoding tasks, " +
                    "paving the way for non-invasive brain-computer interfaces that map muscle signals directly into QWERTY keystrokes."}
                backgroundColor="dark"
            />

            <ContentSection
                imageSrc=""
                imageAlt="multicore-cpu"
                title="RISC-V Multicore CPU"
                description={"Designed and implemented a custom RISC-V multicore processor in C++, featuring a single-cycle architecture with a self-built control and data path. " +
                    "The system supports a wide range of RISC-V assembly instructions and was extended to multicore operation with cache coherency and branch prediction. " +
                    "I developed a G-Share branch predictor achieving an average MPKI of 4.00, and implemented an LRU-based MOESIF cache coherence protocol to ensure efficient multi-core cache management. " +
                    "Together, these components demonstrate the integration of computer architecture principles and low-level performance optimizations into a scalable CPU design."}
                backgroundColor="light"
            />


            <ContentSection
                imageSrc=""
                imageAlt="bruinsquads"
                title="BruinSquads"
                description={"Developed a full-stack web application designed to connect college students through sporting events and community activities. " +
                    "The platform allows users to host and share events, RSVP to upcoming activities, and engage with peers in real time through a dynamic chat interface. " +
                    "I implemented secure RESTful API endpoints with Express and MongoDB for reliable data management, and built a personalized user experience with user-specific endpoints and profile settings. " +
                    "A WebSocket-powered chat system enables multidirectional communication and instant UI updates, creating an interactive and community-driven space for students to discover and participate in events together."}
                backgroundColor="dark"
            />

            <ContentSection
                imageSrc=""
                imageAlt="interviewapp"
                title="Mock Interview App"
                description={"Built a web platform that helps students prepare for technical interviews by solving LeetCode-style questions while receiving real-time assistance from an AI mentor. " +
                    "The application integrates retrieval-augmented generation (RAG) to provide contextually relevant guidance, code analysis, and dynamic feedback on clarity, efficiency, and performance. " +
                    "I leveraged Next.js server actions to design a scalable serverless backend with Firestore integration, and deployed Docker containerized services through AWS ECR, ECS, and Fargate for reliable cloud hosting. " +
                    "Together, these components create an interactive interview preparation experience where users receive personalized evaluations and actionable insights from an AI-powered interviewer."}
                backgroundColor="light"
            />

        </div>
    );
}
