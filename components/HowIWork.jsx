'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Shield, TrendingUp } from 'lucide-react'

export default function HowIWork() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const features = [
    {
      icon: Brain,
      title: 'Estructura clara y flexible',
      description: 'Trabajo principalmente desde la Terapia Cognitivo Conductual, adaptando las herramientas a tu ritmo, tu historia y tus necesidades actuales.'
    },
    {
      icon: TrendingUp,
      title: 'Procesos reales',
      description: 'No creo en soluciones rápidas ni en frases vacías. Creo en procesos reales, en pequeños avances y en construir herramientas que te acompañen más allá de la sesión.'
    },
    {
      icon: Shield,
      title: 'Comprenderte mejor',
      description: 'La terapia no busca cambiar quién eres, sino ayudarte a comprenderte mejor y volver a ti con más claridad.'
    }
  ]

  return (
    <section id="como-trabajo" className="section-padding bg-gradient-to-b from-white to-cream">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-sage-500 mb-4">
            ¿Cómo acompaño los procesos terapéuticos?
          </h2>
          <div className="w-20 h-1 bg-sage-300 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Cada proceso que acompaño tiene una estructura clara, pero flexible
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full border border-sage-50">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-sage-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sage-200 transition-colors"
                >
                  <feature.icon className="w-8 h-8 text-sage-500" />
                </motion.div>
                <h3 className="text-xl font-serif text-sage-500 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="inline-block bg-white px-8 py-4 rounded-full shadow-md">
            <p className="text-sage-500 font-serif text-lg">
              La terapia te ayuda a volver a ti con más claridad 🌱
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
