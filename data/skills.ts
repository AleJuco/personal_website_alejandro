export interface Skill {
  id: string
  title: string
  description: string
  category: string
}

export const skills: Skill[] = [
  {
    id: "1",
    title: "JavaScript / TypeScript",
    description: "Building modern web applications with type-safe code and ES6+ features.",
    category: "Languages",
  },
  {
    id: "2",
    title: "React / Next.js",
    description: "Creating responsive, performant user interfaces with component-based architecture.",
    category: "Frameworks",
  },
  {
    id: "3",
    title: "Python",
    description: "Data analysis, automation scripts, and backend development.",
    category: "Languages",
  },
  {
    id: "4",
    title: "Node.js",
    description: "Server-side JavaScript for APIs and backend services.",
    category: "Backend",
  },
  {
    id: "5",
    title: "Git / GitHub",
    description: "Version control and collaborative development workflows.",
    category: "Tools",
  },
  {
    id: "6",
    title: "Tailwind CSS",
    description: "Utility-first CSS framework for rapid UI development.",
    category: "Styling",
  },
  {
    id: "7",
    title: "SolidWorks",
    description: "3D CAD modeling for mechanical design and engineering projects.",
    category: "Engineering",
  },
  {
    id: "8",
    title: "MATLAB",
    description: "Numerical computing, data analysis, and algorithm development.",
    category: "Engineering",
  },
  {
    id: "9",
    title: "KiCad",
    description: "PCB design and electronic circuit schematic capture.",
    category: "Engineering",
  },
]

export const skillCategories = [...new Set(skills.map(skill => skill.category))]
