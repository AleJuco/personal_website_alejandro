"use client"

import Image from "next/image"
import Link from "next/link"

export interface GalleryItem {
  type: "image" | "video"
  url: string
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  status: "completed" | "in-progress"
  slug: string
  technologies: string[]
  sourceCode?: string
  liveDemo?: string
  details: string
  timeline?: string
  video?: string
  photos?: string[]
  gallery?: GalleryItem[]
  tags?: string[]
}

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const statusStyles = {
    completed: "bg-green-100 text-green-800 border-green-200",
    "in-progress": "bg-yellow-100 text-yellow-800 border-yellow-200",
  }

  const statusLabels = {
    completed: "Completed",
    "in-progress": "In Progress",
  }

  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="project-card group relative overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm cursor-pointer">
        {/* Image Container */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Status Badge and Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            <span
              className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${statusStyles[project.status]}`}
            >
              {statusLabels[project.status]}
            </span>
            {project.tags?.map((tag, index) => (
              <span
                key={index}
                className="inline-block px-3 py-1 text-xs font-medium rounded-full border bg-blue-100 text-blue-800 border-blue-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm line-clamp-2">
            {project.description}
          </p>

          {/* Arrow indicator */}
          <div className="mt-4 flex items-center text-purple-600 font-medium text-sm opacity-0 transform translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            View Project
            <svg
              className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>

        {/* Hover border effect */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500 rounded-xl transition-colors duration-300 pointer-events-none" />
      </div>
    </Link>
  )
}

export default ProjectCard
