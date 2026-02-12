"use client"

import { motion } from "framer-motion"
import HomeNavButtons from "./HomeNavButtons"

const HomeSection = () => {
  return (
    <section 
      id="home-section" 
      className="min-h-screen relative overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-700 via-slate-600 to-slate-500" />
      
      {/* Soft overlay for dreamy effect */}
      <div className="absolute inset-0 bg-linear-to-tr from-purple-900/20 via-transparent to-blue-900/20" />
      
      {/* Floating particles/stars effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particle particle-1" />
        <div className="particle particle-2" />
        <div className="particle particle-3" />
        <div className="particle particle-4" />
        <div className="particle particle-5" />
      </div>

      {/* Main Content */}
      <div className="relative z-5 min-h-screen flex items-center flex-col gap-10 justify-center px-6 md:px-16">
        
        {/* Left - welcome area */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white/90 mb-4 tracking-tight">
            Alejandro Imperial
          </h1>
          <p className="text-xl md:text-2xl text-gray-300/80 font-light">
            Integrated Engineering @ UBC
          </p>
        </motion.div>
        <div className="flex flex-col items-center justify-between w-full h-full">
          {/* Right - Navigation buttons */}
          <div className="flex items-end justify-end">
            <HomeNavButtons />
          </div>
          

          {/* Bottom decorative element */}
          <motion.div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="flex items-center gap-2 text-gray-400/60 text-sm">
              <span>Scroll to explore</span>
              <motion.svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  )
}

export default HomeSection