"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

type Education = {
  id: number
  degree: string
  institution: string
  location: string
  period: string
  description: string
}

const educationData: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Technology in Information Technology",
    institution: "Indian Institute of Information Technology",
    location: "Allahabad, India",
    period: "2022 - 2026",
    description:
      "Pursuing a degree in Information Technology with a focus on software development and data science. Actively involved in various tech clubs and organizations.",
  },
  {
    id: 2,
    degree: "12th Grade - Science",
    institution: "New Paragoan School",
    location: "Jaipur, India",
    period: "2019 - 2021",
    description:
      "Completed 12th grade with a focus on Science, achieving a strong foundation in mathematics and physics.",
  }
]

export function Education() {
  return (
    <section id="education" className="bg-white dark:bg-black">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">Academic background and certifications</p>

        <div className="max-w-3xl mx-auto">
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-12 relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 md:gap-8">
                {/* Timeline line */}
                <div className="hidden md:block absolute left-2 top-10 bottom-0 w-px bg-gray-200 dark:bg-gray-800 ml-4 md:ml-[9.5rem] h-32"></div>

                {/* Circle marker */}
                <div className="absolute hidden left-0 top-20 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 md:flex items-center justify-center md:left-auto md:ml-36">
                  <GraduationCap className="w-4 h-4" />
                </div>

                {/* Date column */}
                <div className="hidden md:block md:text-right md:pr-12 md:col-span-2">
                  <div className="text-gray-600 dark:text-gray-400 flex items-center justify-end">
                    <Calendar className="w-4 h-4 mr-2" />
                    {item.period}
                  </div>
                </div>

                {/* Content column */}
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
                  <div className="text-gray-600 dark:text-gray-400 mb-1">{item.institution}</div>
                  <div className="text-gray-500 dark:text-gray-500 mb-3 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {item.location}
                  </div>
                  <div className="md:hidden text-gray-600 dark:text-gray-400 mb-3 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {item.period}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
