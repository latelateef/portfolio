"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"


type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  github?: string
  demo?: string
  longDescription?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform ",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Tailwind CSS", "FastAPI"],
    github: "https://github.com/latelateef/eazy-parking-mern",
    demo: "https://example.com",
    longDescription:
      "A comprehensive e-commerce solution featuring product listings, cart functionality, secure checkout with Stripe, user authentication, and order management. Built with performance and SEO in mind using Next.js server components and optimized image loading.",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A minimalist portfolio website",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Framer Motion", "Styled Components"],
    github: "https://github.com",
    demo: "https://example.com",
    longDescription:
      "A visually striking portfolio website designed for a professional photographer. Features smooth page transitions, image galleries with lightbox functionality, and contact form integration. Optimized for all device sizes with a focus on showcasing visual content.",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A productivity app for managing tasks and projects.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Redux", "Firebase", "Material UI"],
    github: "https://github.com",
    demo: "https://example.com",
    longDescription:
      "A comprehensive task management application with features like task creation, project organization, due dates, priority levels, and team collaboration. Includes user authentication, real-time updates, and data synchronization across devices.",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A weather dashboard with data visualization.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["JavaScript", "Chart.js", "Weather API", "CSS Grid"],
    github: "https://github.com",
    longDescription:
      "An interactive weather dashboard that provides current conditions, forecasts, and historical weather data. Features include location search, unit conversion, and interactive charts for temperature, precipitation, and wind patterns.",
  },
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="dark:bg-black text-white">
      <div className="section-container lg:w-[65%] w-[90%]">
        <h2 className="section-title text-black dark:text-white">Projects</h2>
        <p className="section-subtitle text-gray-700 dark:text-gray-300">Selected works I've built</p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:gap-24 gap-12"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item} className="group" onClick={() => setSelectedProject(project)}>
              <div className="overflow-hidden rounded-lg dark:bg-black border border-zinc-800 shadow-md hover:shadow-xl  duration-300 cursor-pointer h-full flex flex-col group-hover:border-blue-500 group-hover:scale-105 transition-transform ease-in-out">
                <div className="relative overflow-hidden">
                  <div className="aspect-video bg-zinc-800">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-black dark:bg-zinc-700 rounded-full text-xs font-medium text-white dark:text-zinc-200">
                        {tag}
                      </span>
                     
                    ))}
                  </div>
                  <Button variant="outline" className="w-full border-gray-300 dark:border-zinc-800 text-black dark:text-white dark:hover:bg-zinc-700 
                  hover:bg-zinc-300">
                    View Details
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-lg text-white border-gray-800">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-black dark:text-white">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-gray-700 dark:text-gray-400">{selectedProject.tags.join(" • ")}</DialogDescription>
              </DialogHeader>
              <div className="mt-4 flex flex-col items-center px-8">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-[80%] h-auto rounded-lg mb-4"
                />
                <p className="text-gray-700 dark:text-gray-400 mb-6">{selectedProject.longDescription || selectedProject.description}</p>
                <div className="flex gap-4">
                  {selectedProject.github && (
                    <Button variant="outline" asChild className="border-gray-700 text-black dark:text-white
                    hover:bg-gray-200 dark:hover:bg-gray-800">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github size={16} />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {selectedProject.demo && (
                    <Button asChild className="bg-black dark:bg-white text-white dark:text-black dark:hover:bg-gray-200 hover:bg-gray-800">
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
