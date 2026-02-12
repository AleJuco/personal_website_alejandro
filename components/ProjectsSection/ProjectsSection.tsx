import ProjectCard from "./ProjectCard"
import { projects } from "@/data/projects"

const ProjectsSection = () => {
  return (
    <section id="projects-section" className="min-h-screen py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of my work, from completed projects to ongoing experiments.
            Click on any project to learn more.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection