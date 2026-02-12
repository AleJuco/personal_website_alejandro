"use client"

import { Skill } from "@/data/skills"

interface SkillCardProps {
  skill: Skill
}

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <div className="group relative bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      {/* Category Badge */}
      <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800 mb-3">
        {skill.category}
      </span>

      {/* Title */}
      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
        {skill.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm">
        {skill.description}
      </p>

      {/* Hover border effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500 rounded-xl transition-colors duration-300 pointer-events-none" />
    </div>
  )
}

export default SkillCard
