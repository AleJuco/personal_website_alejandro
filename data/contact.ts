export interface ContactLink {
  id: string
  label: string
  url: string
  icon: "email" | "linkedin" | "github" | "twitter" | "resume" | "link"
}

export interface ContactInfo {
  email: string
  linkedin?: string
  github?: string
  twitter?: string
  resumeUrl?: string
  otherLinks?: ContactLink[]
}

export const contactInfo: ContactInfo = {
  email: "imperial.alejandroj1@gmail.com",
  linkedin: "https://www.linkedin.com/in/alejandrojucoimperial/",
  github: "https://github.com/AleJuco",
  resumeUrl: "/resume.pdf",
  otherLinks: [
    // Add more links as needed
    // { id: "1", label: "Portfolio", url: "https://...", icon: "link" },
  ],
}
