import Link from "next/link"
import { LucideMenu } from "lucide-react"
import { useState } from "react"

const ProjectAccordion = () => {

    const [projectAccordionOpen, setProjectAccordionOpen] = useState(false); 

  return (

    <div className="py-2 relative">

        <button 
            onClick={() => setProjectAccordionOpen(!projectAccordionOpen)}
        >

            <LucideMenu className="cursor-pointer"/>
            
        </button>

        <div className={` absolute top-full right-0  bg-white dark:bg-gray-400 shadow-lg rounded-md overflow-hidden transition-all duration-300 ${
          projectAccordionOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}>
          <div className="flex flex-col gap-5 py-2 px-5">
            <Link href="/about" onClick={() => setProjectAccordionOpen(false)}>
              <p className="hover:font-bold">About</p>
            </Link>
            <Link href="/projects" onClick={() => setProjectAccordionOpen(false)}>
              <p className="hover:font-bold">Projects</p>
            </Link>
          </div>
        </div>
    </div>

  )
}

export default ProjectAccordion