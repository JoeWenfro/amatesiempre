'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BookOpen, Download, FileText, Sparkles } from 'lucide-react'
import { contactInfo } from '@/lib/sections'

export default function Guides() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const guides = [
    {
      id: 'ansiedad',
      title: 'Guía práctica para gestionar la ansiedad',
      description: 'Guía digital de 20 páginas con herramientas para comprender la ansiedad, identificar síntomas y desarrollar estrategias de regulación emocional y autocuidado.',
      icon: BookOpen,
      price: 'S/ 35',
      format: 'PDF descargable',
      pages: '20 páginas',
      color: 'from-sage-400 to-sage-500'
    }
  ]

  const handleComprarGuia = (guia) => {
    const mensaje = `Hola Nicole 🤍\n\nEstoy interesada/o en adquirir la guía:\n*${guia.title}*\n\nPrecio: ${guia.price}\n\n¿Podrías enviarme los detalles de pago?\n\nGracias ✨`
    
    const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(/\+|\s/g, '')}?text=${encodeURIComponent(mensaje)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="guias" className="section-padding bg-gradient-to-b from-white via-cream to-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-20 left-20 w-96 h-96 bg-sage-200 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.2, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute -bottom-20 -right-20 w-80 h-80 bg-sage-100 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <Sparkles className="w-12 h-12 text-sage-400 mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-serif text-sage-500 mb-4">
            Guías Psicoeducativas
          </h2>
          <div className="w-20 h-1 bg-sage-400 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sé que no siempre es posible iniciar psicoterapia de inmediato, y está bien. Por eso he creado guías psicoeducativas pensadas para acompañarte cuando aún no te sientes list@ o no puedes iniciar un proceso terapéutico 💛
          </p>
        </motion.div>

        {/* Guide Cards */}
        <div className="max-w-4xl mx-auto">
          {guides.map((guide, index) => (
            <motion.div
              key={guide.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-sage-100 hover:border-sage-300"
            >
              <div className="md:flex">
                {/* Icon Section */}
                <div className={`md:w-2/5 bg-gradient-to-br ${guide.color} p-12 flex items-center justify-center`}>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="text-center"
                  >
                    <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                      <guide.icon className="w-12 h-12 text-white" strokeWidth={1.5} />
                    </div>
                    <div className="text-white">
                      <p className="text-sm font-medium opacity-90 mb-1">{guide.format}</p>
                      <p className="text-xs opacity-75">{guide.pages}</p>
                    </div>
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="md:w-3/5 p-8">
                  <h3 className="text-2xl font-serif text-sage-500 mb-4">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {guide.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Download className="w-4 h-4 text-sage-400 mr-2" />
                      <span>Descarga inmediata después del pago</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FileText className="w-4 h-4 text-sage-400 mr-2" />
                      <span>Formato PDF optimizado para lectura</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <BookOpen className="w-4 h-4 text-sage-400 mr-2" />
                      <span>Herramientas prácticas y ejercicios</span>
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-6 border-t border-sage-100">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Pago único</p>
                      <p className="text-3xl font-bold text-sage-500">{guide.price}</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleComprarGuia(guide)}
                      className="px-8 py-4 bg-sage-500 hover:bg-sage-600 text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
                    >
                      Comprar guía
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info adicional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto mt-12 text-center"
        >
          <div className="bg-sage-50 rounded-3xl p-8 border-2 border-sage-200">
            <Sparkles className="w-8 h-8 text-sage-400 mx-auto mb-4" />
            <h4 className="text-lg font-serif text-sage-500 mb-3">
              ¿Cómo funciona?
            </h4>
            <div className="text-sm text-gray-600 space-y-2">
              <p>1. Haz clic en "Comprar guía" y te redirigiré a WhatsApp</p>
              <p>2. Te enviaré los datos de pago</p>
              <p>3. Realiza el pago y envíame la captura</p>
              <p>4. Recibirás tu guía en PDF por WhatsApp o correo </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
