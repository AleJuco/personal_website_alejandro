"use client"

import { useState } from "react"
import Image from "next/image"
import { aboutInfo, hobbies } from "@/data/about"
import HobbyCard from "./HobbyCard"

const AboutSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = ["About Me", "Hobbies"]

  return (
    <section id="about-section" className="min-h-screen py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get to know me a little better
          </p>
        </div>

        {/* Carousel Navigation Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          {slides.map((slide, index) => (
            <button
              key={slide}
              onClick={() => setCurrentSlide(index)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                currentSlide === index
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {slide}
            </button>
          ))}
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Slides */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {/* Slide 1: About Me */}
            <div className="w-full flex-shrink-0 px-16">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Photo */}
                  <div className="relative">
                    <div className="relative w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={aboutInfo.photo}
                        alt={aboutInfo.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200 rounded-full blur-2xl opacity-60" />
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-200 rounded-full blur-2xl opacity-60" />
                  </div>

                  {/* Info */}
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{aboutInfo.name}</h3>
                    <p className="text-purple-600 font-medium mb-4">{aboutInfo.tagline}</p>
                    <p className="text-gray-600 leading-relaxed mb-6">{aboutInfo.bio}</p>

                    {/* Fun Facts */}
                    {aboutInfo.funFacts && aboutInfo.funFacts.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">More</h4>
                        <div className="flex flex-wrap gap-2">
                          {aboutInfo.funFacts.map((fact, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                            >
                              {fact}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Favorite Song */}
                    {aboutInfo.favoriteSong && (
                      <a
                        href={aboutInfo.favoriteSong.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4 mb-4 hover:from-green-100 hover:to-green-200 hover:shadow-md transition-all duration-300 group cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                            </svg>
                          </div>
                          <div className="flex-1">
                            <p className="text-xs text-green-600 font-medium uppercase tracking-wide">Currently Listening To</p>
                            <p className="font-semibold text-gray-900">{aboutInfo.favoriteSong.title}</p>
                            <p className="text-sm text-gray-600">{aboutInfo.favoriteSong.artist}</p>
                          </div>
                          <svg className="w-5 h-5 text-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                      </a>
                    )}

                    {/* Favorite Quote */}
                    {aboutInfo.favoriteQuote && (
                      <div className="border-l-4 border-purple-500 pl-4 italic">
                        <p className="text-gray-700">&quot;{aboutInfo.favoriteQuote.text}&quot;</p>
                        <p className="text-sm text-gray-500 mt-1">— {aboutInfo.favoriteQuote.author}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2: Hobbies */}
            <div className="w-full flex-shrink-0 px-16">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 min-h-[400px]">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Things I Enjoy</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {hobbies.map((hobby) => (
                    <HobbyCard key={hobby.id} hobby={hobby} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection