import { skills } from "@/data/skills"
import SkillCard from "./SkillCard"

const SkillsSection = () => {
  return (
    <section id="skills-section" className="min-h-screen py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
