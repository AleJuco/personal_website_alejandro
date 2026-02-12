"use client"

import Image from "next/image"
import { Hobby } from "@/data/about"

interface HobbyCardProps {
  hobby: Hobby
}

const HobbyCard = ({ hobby }: HobbyCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Media Container */}
      <div className="relative h-48 w-full overflow-hidden">
        {hobby.video ? (
          <video
            src={hobby.video}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            onMouseEnter={(e) => e.currentTarget.play()}
            onMouseLeave={(e) => {
              e.currentTarget.pause()
              e.currentTarget.currentTime = 0
            }}
          />
        ) : hobby.image ? (
          <Image
            src={hobby.image}
            alt={hobby.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
            <span className="text-white text-4xl">🎯</span>
          </div>
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
          {hobby.title}
        </h3>
        <p className="text-gray-600 text-sm">
          {hobby.description}
        </p>
      </div>

      {/* Hover border effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500 rounded-xl transition-colors duration-300 pointer-events-none" />
    </div>
  )
}

export default HobbyCard
