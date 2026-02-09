"use client"

import Link from "next/link"
import MenuAccordian from "./MenuAccordian"
import { useEffect, useState } from "react"

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false)

    const findSection = (id: string) => {
        const section = document.getElementById(id)
        if (section){
            section.scrollIntoView({ behavior: "smooth" })
        } 
    }

    useEffect(() => {
        const handleScroll = () => {
            const homeSection = document.getElementById("home-section")
      
            if (!homeSection) {
            setIsVisible(true)
            return
        }
        const rect = homeSection.getBoundingClientRect()
        // Show navbar when the bottom of home section is above the viewport (scrolled past)
        setIsVisible(rect.bottom < 100)
    }

    // Check initial state
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

    return (
        <nav 
            className={`fixed top-0 left-0 right-0 z-50 flexBetween padding-container py-4 mx-4 mt-3 rounded-full transition-all duration-300 ease-in-out
            ${isVisible 
          ? "bg-white/90 backdrop-blur-md shadow-lg translate-y-0 opacity-100" 
          : "bg-transparent -translate-y-2 opacity-0 pointer-events-none"
        }`}
    >
        <button className="hidden lg:flex" onClick={() => findSection("home-section")}>
            <h1 className="font-bold text-xl text-gray-900 hover:text-gray-600 transition-colors">
              Alejandro Imperial
            </h1>
        </button> 

        <button className="lg:hidden" onClick={() => findSection("home-section")}>
            <h1 className="font-bold text-xl text-gray-900">AI</h1>
        </button> 

        <ul className="hidden h-full gap-10 lg:flex items-center">
            <button onClick={() => findSection("about-section")} className="text-gray-700 hover:text-gray-900 font-medium transition-colors hover-underline"> 
                About
            </button>

            <button onClick={() => findSection("projects-section")} className="text-gray-700 hover:text-gray-900 font-medium transition-colors hover-underline">
              Projects
            </button>

            <button onClick={() => findSection("contact-section")} className="text-gray-700 hover:text-gray-900 font-medium transition-colors hover-underline">
              Contact
            </button> 
        </ul>

        <div className={`inline-block lg:hidden ${isVisible ? "" : "pointer-events-none"}`}>
            <MenuAccordian/>
        </div>

        </nav>
    )
}


export default Navbar