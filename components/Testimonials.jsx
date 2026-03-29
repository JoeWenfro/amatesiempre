'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Quote, Star } from 'lucide-react'

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const testimonials = [
    {
      name: 'María S.',
      text: 'Nicole me ayudó a entender mis emociones de una manera que nunca había experimentado. Su calidez y profesionalismo hicieron que cada sesión fuera un espacio seguro.',
      rating: 5
    },
    {
      name: 'Carlos R.',
      text: 'Empezar terapia fue la mejor decisión. Nicole tiene una manera única de escuchar y guiar sin juzgar. Me siento más conectado conmigo mismo.',
      rating: 5
    },
    {
      name: 'Ana P.',
      text: 'Las herramientas que aprendí en las sesiones me acompañan todos los días. Nicole es empática, profesional y realmente comprometida con el proceso.',
      rating: 5
    }
  ]

  return (
    <section id="testimonios" className="section-padding bg-gradient-to-b from-cream to-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-sage-500 mb-4">
            Testimonios
          </h2>
          <div className="w-20 h-1 bg-sage-300 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lo que dicen quienes han confiado en este proceso
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full border border-sage-50 relative">
                <Quote className="w-10 h-10 text-sage-200 mb-4" />
                
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-sage-100">
                  <div>
                    <p className="font-medium text-sage-500">{testimonial.name}</p>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-sage-400 text-sage-400" />
                    ))}
                  </div>
                </div>
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
          <p className="text-gray-500 text-sm">
            Los testimonios reflejan experiencias reales • Nombres modificados por confidencialidad
          </p>
        </motion.div>
      </div>
    </section>
  )
}
