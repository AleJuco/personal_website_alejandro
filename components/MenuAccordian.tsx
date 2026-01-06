'use client'
import { LucideMenu } from "lucide-react"
import { use, useState } from "react"
import Link from "next/link"


const MenuAccordian = () => {

    const [menuAccordionOpen, setMenuAccordionOpen] = useState(false);

  return (
    <div className="py-2 relative">

        <button 
            onClick={() => setMenuAccordionOpen(!menuAccordionOpen)}
        >

            <LucideMenu className="cursor-pointer"/>
            
        </button>

        <div className={` absolute top-full right-0 shadow-lg rounded-md overflow-hidden transition-all duration-300 ${
          menuAccordionOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}>
          <div className="flex flex-col">
            <Link 
            href="/about" onClick={() => setMenuAccordionOpen(false)}
            className="menu-accordion-content menu-accordion-content:hover"
            >
              <p className="">About</p>
            </Link>
            <Link href="/projects" onClick={() => setMenuAccordionOpen(false)}
            className="menu-accordion-content menu-accordion-content:hover">
              <p className="">Projects</p>
            </Link>
          </div>
        </div>

    </div>
  )
}

export default MenuAccordian