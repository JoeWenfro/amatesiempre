'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MessageCircle, Calendar, Heart } from 'lucide-react'
import { scrollToSection } from '@/lib/sections'
import { contactInfo } from '@/lib/sections'

export default function ClosingCTA() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="section-padding bg-gradient-to-b from-cream to-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-sage-200 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <Heart className="w-16 h-16 text-sage-400 mx-auto" strokeWidth={1.5} />
          </motion.div>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-serif text-sage-500 mb-6">
            ¿No sabes por dónde empezar?
            <br />
            Estoy aquí
          </h2>

          {/* Description */}
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed mb-10 max-w-2xl mx-auto">
            <p>
              A veces dar el primer paso cuesta, y está bien. No siempre sabemos cómo explicar lo que sentimos, ni por dónde empezar.
            </p>
            <p className="text-sage-600 font-medium">
              Este es un espacio para que puedas hablar con calma, sin presión ni juicios.
            </p>
            <p className="text-base text-gray-600">
              No tienes que tener todo claro. Solo tienes que empezar.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              onClick={() => {
                const chatbotBtn = document.querySelector('[data-chatbot-trigger]')
                if (chatbotBtn) chatbotBtn.click()
              }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-5 bg-sage-500 hover:bg-sage-600 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-sage-300 transition-all flex items-center justify-center space-x-3"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Empezar a hablar conmigo</span>
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('precios')}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-5 bg-white hover:bg-sage-50 text-sage-600 border-2 border-sage-400 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-3"
            >
              <Calendar className="w-6 h-6" />
              <span>Agendar cita</span>
            </motion.button>
          </div>

          {/* Footer note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-sm text-gray-500 mt-8 italic"
          >
            Espacio confidencial y respetuoso
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
