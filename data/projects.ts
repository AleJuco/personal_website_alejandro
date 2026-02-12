import { Project } from "@/components/ProjectsSection/ProjectCard"

export const projects: Project[] = [
  {
    id: "1",
    title: "Personal Website",
    description: "Standing as both my personal website and portfolio, this project was one of my first interactions with web development. It showcases my journey, skills, and projects in a clean and modern design.",
    image: "/projects/website1.png",
    status: "completed",
    slug: "project-one",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    sourceCode: "https://github.com/AleJuco/personal_website_alejandro.git",
    details: "This personal website serves as my digital portfolio and professional presence online. Built with Next.js and React, it features a modern, responsive design with smooth animations and transitions. The project helped me learn about component-based architecture, CSS-in-JS styling with Tailwind, and deploying web applications.",
    timeline: "Ongoing",
  },
  {
    id: "2",
    title: "RFID-Based Wait Time Logging System",
    description: "A compact system that utilizes RFID technology to log and estimate wait times in various settings, enhancing efficiency and user experience.",
    image: "/projects/rfid1.jpg",
    status: "completed",
    slug: "project-two",
    technologies: ["C++", "RFID Hashing", "HTTPS Client", "Rapid Prototyping", "Circuit Design", "ESP32"],
    details: "This project was a commission for BC Children's Hospital with the aim of logging and analyzing operating room wait times in order to diagnose inefficiencies and improve patient flow. The module uses a single ESP32 microcontroller connected to an RFID module to send encrypted data over wifi via an HTTPS client. This is then picked up by a google spreadsheet script written in javascript and outputs the values to a secure spreadsheet. Users could customize the card names and other data. Additionally, seeing as the main users were infants or similar, a small buzzer module was added to the module to play common melodies known to children, such as happy birthday.",
    photos: ["/projects/rfid1.jpg", "/projects/rfid2.jpg", "/projects/rfid3.jpg", "/projects/rfid4.jpg", "/projects/rfid5.png"],
    tags: ["Commission"],
    timeline: "August 2025 - October 2025",
  },
  {
    id: "5",
    title: "Line Following BMO Robot",
    description: "Built a  robot that pursues a line using QRD1114 optical sensors and an Arduino Uno microcontroller.",
    image: "/projects/bmo1.jpg",
    status: "completed",
    slug: "project-five",
    technologies: ["Arduino Uno", "C++", "PID Algorithm", "Sensor Integration"],
    sourceCode: "https://docs.google.com/document/d/1G8ZWHK5DMxDq-Z7rQRlvqjU36qabdbcN2AftH1FW8-k/edit?usp=sharing",
    details: "This project was part of a challenging group assignment. The goal was to build a line following robot that could navigate straight lines, right angle turns, tight angles, intersections, and gaps. I was responsible for much of the electrical and programming work. After many iterations, I finally got a solid drivetrain working using two DC motors and an H-Brdige for PWM control. I also prototyped the main sensor mounts, ensuring optimal placement for turning ease. The most challenging part  of this project was the programming aspect. I wrote many test cases to find the best way to navigate the complex combination of line obstacles in the course and ultimately settled on writing my own PID controller to ensure smooth and accurate navigation. The project was a great learning experience in robotics, control systems, and rigourus testing and iteration. Additionally, for added flare, the robot was styled after the cartoon character BMO, from Adventure Time!",
    timeline: "September 2025 - January 2026",
    gallery: [    { type: "image", url: "/projects/bmo1.jpg" },    { type: "image", url: "/projects/bmo2.jpg" },    { type: "image", url: "/projects/bmo3.jpg" }, { type: "image", url: "/projects/bmo4.jpg" },    { type: "video", url: "/projects/bmovid1.mp4" },  ],
  },
  {
    id: "3",
    title: "Baymini",
    description: "Inspired by the admired companion from Big Hero 6, we decided to try and build our own mini version of Baymax, Baymini.",
    image: "/projects/baymin.jpg",
    status: "completed",
    slug: "project-three",
    technologies: ["Python", "OpenCV", "MediaPipe", "Raspberry Pi", "Raspberry Pi Development Tools", "Flask", "Gemini API"],
    sourceCode: "https://github.com/AleJuco/Baymin",
    liveDemo: "https://devpost.com/software/baymini",
    details: "For this project, I was responsible for most of the raspberry pi programming and development. This was a completely new tool to me so for the first couple of hours of the hackathon, I quickly learnt how to flash the PI bios, how to connect it via SSH (wifi) and how to setup up a proper development environment. From there, I set up web cam integration as well as our desktop microphone. These were used as inputs to Baymini, whose goal was to read various product labels or identify food items upon hearing a voice command.",
    timeline: "36 hours",
    photos: ["/projects/baymin1.png", "/projects/baymin.jpg"],
    tags: ["Hackathon Submission",],
  },
  {
    id: "4",
    title: "Accessigesture",
    description: "Control your computer screen with just your hands! Accessigesture is an accessibility-focused project that uses gesture recognition to provide alternative input methods for users with different needs. It leverages computer vision and web APIs to detect hand movements and translate them into actions, making digital interfaces more inclusive.",
    image: "/projects/accessigesture2.png",
    status: "completed",
    slug: "project-four",
    technologies: ["Python", "OpenCV", "Google Media Pipe AI Solutions", "tkinter"],
    sourceCode: "https://github.com/dlt87/AccessiGesture.git",
    liveDemo: "https://devpost.com/software/accessigesture",
    details: "My teams entry to NWHacks' Hack Camp 2025, Accessigesture won the Best Startup Award for its versatility and potential real world impact. The project is a desktop application that uses a webcam to track hand movements and recognize specific gestures. It then translates these gestures into computer commands, allowing users to control their screen without a mouse or keyboard. This project was built using Python and OpenCV for computer vision, along with Google's Media Pipe AI solutions for gesture recognition. We then integrated customizable user controls by building an adjusstable interface using tkinter.",
    timeline: "19 Hours",
    tags: ["Hackathon Submission", "Hackathon Winner"],
  },
  {
    id: "6",
    title: "Portal Turret Project",
    description: "An ongoing project to build a functional replica of the turret from the Portal video game series. Plans to have it track faces and bodies, focus lasers on targets, and hit them with nerf darts.",
    image: "/projects/portal1.jpeg",
    status: "in-progress",
    slug: "project-six",
    technologies: ["ESP32", "3D Printing", "Robotics", "C++", "OpenCV", "Mediapipe", "Python", "ESP32-CAM"],
    sourceCode: "https://github.com/AleJuco/Portal-Turret-Project",
    details: "An ongoing project to build a functional replica of the turret from the Portal video game series. This involves 3D printing the enclosure, programming ESP32 and ESP32 - CAM microcontrollers for body/face tracking and video streaming capability, face and body detection using OpenCV and Mediapipe and potentially adding a shooting mechanism (?). Currently, I have made progress in making a video streaming server using the ESP32-CAM. A python script decodes the stream frame by frame using OpenCV which is then fed into one of Mediapipes facial recognitions models.",
    timeline: "Started December 2025",
    gallery: [    { type: "image", url: "/projects/portal1.jpeg" },    { type: "video", url: "/projects/portal1.mov" },  ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug)
}
