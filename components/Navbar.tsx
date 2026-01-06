import Link from "next/link"
import MenuAccordian from "./MenuAccordian"

const Navbar = () => {
  return (
    <nav className="border-2 border-red-700 bg-gray-600 flexBetween max-container padding-container relative z-30 py-5 rounded-4xl">
        <Link className="hidden lg:flex" href="/">
            <h1 className="font-bold text-2xl">Alejandro Imperial</h1>
        </Link> 

        <Link className="lg:hidden"href="/">
            <h1 className="font-bold text-2xl">AI</h1>
        </Link> 

        <ul className="hidden h-full gap-12 lg:flex items-center font-black">
            <Link 
            href="/about"
            className="hover-underline"
            >
                About
            </Link>

            <Link href="/projects" className="hover-underline">
            Projects
            </Link>

            <Link href="/contact" className="hover-underline">
            Contact
            </Link> 
        </ul>

        <div className="inline-block lg:hidden ">
            <MenuAccordian/>
        </div>

    </nav>
  )
}

export default Navbar