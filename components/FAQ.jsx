'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { X, HelpCircle } from 'lucide-react'

export default function FAQ() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedFAQ, setSelectedFAQ] = useState(null)

  const faqs = [
    {
      question: '¿Cómo sé si necesito terapia?',
      answer: 'Si algo te está pesando emocionalmente, te genera malestar o sientes que no puedes manejarlo sola/o, ya es motivo suficiente para buscar acompañamiento.'
    },
    {
      question: '¿Necesito tener un "problema grave" para ir a terapia?',
      answer: 'No. La terapia no es solo para crisis. También es un espacio para conocerte, cuidarte y fortalecer tu bienestar emocional.'
    },
    {
      question: '¿Cuánto dura una sesión?',
      answer: 'Cada sesión tiene una duración aproximada de 50 minutos.'
    },
    {
      question: '¿Cuántas sesiones voy a necesitar?',
      answer: 'Cada proceso es diferente. En promedio, un proceso terapéutico puede durar entre 12 y 20 sesiones, pero esto se va evaluando contigo a lo largo del camino.'
    },
    {
      question: '¿La terapia es confidencial?',
      answer: 'Sí. Todo lo que se conversa en sesión es estrictamente confidencial, respetando los límites éticos y legales de la profesión.'
    },
    {
      question: '¿Atiendes de forma virtual?',
      answer: 'Sí. Atiendo de forma virtual y también presencial, según disponibilidad y ubicación.'
    },
    {
      question: '¿Qué pasa si no puedo asistir a una sesión?',
      answer: 'Las reprogramaciones deben realizarse con anticipación. Los detalles se encuentran en los términos y condiciones del servicio.'
    },
    {
      question: '¿Cómo realizo el pago?',
      answer: 'Actualmente el pago se realiza antes de la sesión mediante transferencia bancaria, Yape o Plin.'
    }
  ]

  return (
    <>
      <section id="faq" className="section-padding bg-gradient-to-b from-white to-cream">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-sage-500 mb-4">
              Preguntas Frecuentes
            </h2>
            <div className="w-20 h-1 bg-sage-400 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedFAQ(faq)}
                className="bg-white rounded-3xl p-6 text-left border-2 border-sage-100 hover:border-sage-300 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              >
                <HelpCircle className="w-10 h-10 text-sage-400 mb-4 group-hover:scale-110 group-hover:text-sage-500 transition-transform" strokeWidth={1.5} />
                <h3 className="text-lg font-medium text-gray-800">
                  {faq.question}
                </h3>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL POPUP */}
      <AnimatePresence>
        {selectedFAQ && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFAQ(null)}
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 md:p-12 max-w-2xl w-full shadow-2xl border-2 border-sage-200 relative"
            >
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedFAQ(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-sage-100 hover:bg-sage-200 rounded-full flex items-center justify-center shadow-lg transition-all"
              >
                <X className="w-5 h-5 text-sage-600" />
              </motion.button>

              <HelpCircle className="w-16 h-16 text-sage-400 mb-6" strokeWidth={1.5} />
              
              <h3 className="text-2xl md:text-3xl font-serif text-sage-500 mb-6">
                {selectedFAQ.question}
              </h3>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                {selectedFAQ.answer}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
