'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Heart, Users, Shield, Sparkles } from 'lucide-react'

export default function Vision() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const values = [
    {
      icon: Shield,
      title: 'Calidad sobre cantidad',
      text: 'No busco cantidad, busco calidad en cada proceso'
    },
    {
      icon: Heart,
      title: 'Ética y profesionalismo',
      text: 'Priorizando siempre el bienestar real de cada persona'
    },
    {
      icon: Users,
      title: 'Equipo especializado',
      text: 'Con el tiempo, una cartera de psicólogos especialistas'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-white to-cream relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-20 left-10 w-96 h-96 bg-sage-100 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-4"
            >
              <Sparkles className="w-12 h-12 text-sage-400 mx-auto" strokeWidth={1.5} />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-serif text-sage-500 mb-4">
              Mi visión con AMATESIEMPRE
            </h2>
            <div className="w-20 h-1 bg-sage-400 mx-auto rounded-full" />
          </div>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-sage-100 mb-8"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Mi visión con AMATESIEMPRE es consolidar este espacio como un <span className="font-medium text-sage-500">proyecto sólido y responsable</span> de atención psicológica, donde, con el tiempo, pueda contar con una cartera de psicólogos con especialidades específicas.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Creo que cada persona merece ser acompañada por el profesional más idóneo para su proceso. Por eso, mi objetivo es que AMATESIEMPRE crezca de manera consciente, priorizando siempre la calidad, la ética y el bienestar real de quienes confían en este espacio.
            </p>
          </motion.div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-sage-50 rounded-3xl p-6 border-2 border-sage-100 hover:border-sage-300 transition-all text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm"
                >
                  <value.icon className="w-7 h-7 text-sage-500" strokeWidth={1.5} />
                </motion.div>
                <h3 className="font-serif text-lg text-sage-500 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {value.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
