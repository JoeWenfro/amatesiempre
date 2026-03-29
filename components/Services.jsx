'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { User, Users, Briefcase, Presentation } from 'lucide-react'
import { scrollToSection } from '@/lib/sections'

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const services = [
    {
      icon: User,
      category: 'Atención Clínica',
      title: 'Psicoterapia individual',
      description: 'Proceso terapéutico de evaluación y tratamiento psicológico, orientado a trabajar tu motivo de consulta y objetivos terapéuticos.',
      details: ['Modalidad: virtual (Google Meet) o presencial', 'Duración: 45 minutos'],
    },
    {
      icon: Users,
      category: 'Atención Clínica',
      title: 'Acompañamiento psicológico',
      description: 'Proceso breve enfocado en problemáticas específicas de baja complejidad. Se brindan herramientas prácticas y recursos de afrontamiento.',
      details: ['Modalidad: virtual o presencial', 'Duración: 45 minutos'],
    },
    {
      icon: Briefcase,
      category: 'Psicología Organizacional',
      title: 'Orientación y consejería laboral',
      description: 'Sesión puntual orientada a brindar herramientas para afrontar dificultades laborales relacionadas a liderazgo, satisfacción laboral y toma de decisiones.',
      details: ['Modalidad: virtual', 'Duración: 55 minutos'],
    },
    {
      icon: Presentation,
      category: 'Psicología Organizacional',
      title: 'Charlas y capacitaciones',
      description: 'Charlas y capacitaciones en temas de psicología y recursos humanos, orientadas a promover el bienestar psicológico y un clima laboral saludable.',
      details: ['Servicio personalizado', 'Cotización a medida'],
    }
  ]

  return (
    <section id="servicios" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-sage-100 rounded-full opacity-30 blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-sage-200 rounded-full opacity-20 blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-sage-500 mb-4">
            Servicios
          </h2>
          <div className="w-20 h-1 bg-sage-400 mx-auto rounded-full" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
            Acompaño procesos psicológicos en un espacio seguro, confidencial y sin juicios
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.03, y: -10 }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-cream to-white rounded-3xl p-8 border-2 border-sage-100 hover:border-sage-300 transition-all duration-500 h-full shadow-lg hover:shadow-2xl">
                {/* Icon & Title */}
                <div className="flex items-start space-x-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-sage-50 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:bg-sage-100"
                  >
                    <service.icon className="w-8 h-8 text-sage-500" strokeWidth={1.5} />
                  </motion.div>
                  <div className="flex-1">
                    <span className="text-xs uppercase tracking-wider text-sage-400 font-medium">
                      {service.category}
                    </span>
                    <h3 className="text-2xl font-serif text-sage-500 mt-1">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-sage-400 rounded-full mr-3" />
                      {detail}
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('precios')}
                  className="w-full py-3 bg-sage-400 hover:bg-sage-500 text-white font-medium rounded-full text-sm uppercase tracking-wider shadow-md hover:shadow-xl transition-all"
                >
                  Ver precio
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
