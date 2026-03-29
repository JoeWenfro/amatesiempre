'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Globe, Check, Sparkles, Calendar } from 'lucide-react'
import PreConsultaModal from './PreConsultaModal'
import AgendamientoModal from './AgendamientoModal'

export default function Prices() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [showPreConsulta, setShowPreConsulta] = useState(false)
  const [showAgendamiento, setShowAgendamiento] = useState(false)
  const [preConsultaData, setPreConsultaData] = useState(null)

  const handlePreConsultaComplete = (data) => {
    setPreConsultaData(data)
    setShowPreConsulta(false)
    setShowAgendamiento(true)
  }

  const priceOptions = [
    {
      id: 'virtual-peru',
      title: 'Virtual',
      location: 'Perú',
      icon: MapPin,
      badge: 'Popular',
      highlight: true,
      packages: [
  { sessions: 1, price: 'S/ 50.00', original: 'S/ 200', discount: '-75%' },
  { sessions: 4, price: 'S/ 180.00', original: 'S/ 750', discount: '-76%', recommended: true }
],
      paymentInfo: 'Se paga por adelantado',
      features: ['Google Meet', 'Horario flexible', 'Lunes a Sábado']
    },
    {
      id: 'presencial',
      title: 'Presencial',
      location: 'Lima, Perú',
      icon: MapPin,
      badge: 'Exclusivo',
      highlight: false,
      packages: [
        { sessions: 1, price: 'S/ 240', original: null },
        { sessions: 4, price: 'S/ 910', original: 'S/ 960', discount: '-5%', recommended: true }
      ],
      paymentInfo: 'San Isidro (límite con Magdalena)',
      features: ['Solo Viernes', 'Espacio privado', 'Ambiente acogedor']
    },
    {
      id: 'internacional',
      title: 'Virtual',
      location: 'Internacional',
      icon: Globe,
      badge: 'Global',
      highlight: false,
      packages: [
        { sessions: 1, price: '73 USD', original: null },
        { sessions: 4, price: '268 USD', original: '292 USD', discount: '-8%', recommended: true }
      ],
      paymentInfo: 'Válido solo pagando por adelantado',
      features: ['Desde cualquier país', 'Horario coordinado', 'Google Meet']
    }
  ]

  return (
    <>
      <section id="precios" className="section-padding bg-gradient-to-b from-white via-cream to-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.2, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 right-20 w-96 h-96 bg-sage-200 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -bottom-20 -left-20 w-80 h-80 bg-sage-100 rounded-full blur-3xl"
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
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block mb-4"
            >
              <Sparkles className="w-12 h-12 text-sage-400 mx-auto" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-serif text-sage-500 mb-4">
              Inversión en tu bienestar
            </h2>
            <div className="w-20 h-1 bg-sage-400 mx-auto rounded-full" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
              Elige la modalidad que mejor se adapte a ti
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
            {priceOptions.map((option, index) => (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -15, scale: 1.02 }}
                className={`relative group ${option.highlight ? 'md:-mt-4' : ''}`}
              >
                {option.badge && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.15 }}
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10"
                  >
                    <span className="bg-sage-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                      {option.badge}
                    </span>
                  </motion.div>
                )}

                <div
                  className={`bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 h-full border-2 ${
                    option.highlight ? 'border-sage-400' : 'border-sage-100 hover:border-sage-300'
                  }`}
                >
                  <div className="text-center mb-6">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                        option.highlight ? 'bg-sage-400' : 'bg-sage-100'
                      }`}
                    >
                      <option.icon
                        className={`w-8 h-8 ${option.highlight ? 'text-white' : 'text-sage-500'}`}
                        strokeWidth={1.5}
                      />
                    </motion.div>
                    <h3 className="text-2xl font-serif text-sage-500 mb-1">
                      {option.title}
                    </h3>
                    <p className="text-sm text-gray-500">{option.location}</p>
                    <p className="text-xs text-sage-400 mt-2">{option.paymentInfo}</p>
                  </div>

                  <div className="mb-6 space-y-2">
                    {option.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <Check className="w-4 h-4 text-sage-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 mb-6">
                    {option.packages.map((pkg, idx) => (
                      <div
                        key={idx}
                        className={`p-4 rounded-2xl transition-all ${
                          pkg.recommended
                            ? 'bg-sage-50 border-2 border-sage-400'
                            : 'bg-gray-50 border-2 border-gray-200'
                        }`}
                      >
                        {pkg.recommended && (
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-sage-600 uppercase">Recomendado</span>
                            {pkg.discount && (
                              <span className="bg-sage-400 text-white text-xs font-bold px-2 py-1 rounded-full">
                                {pkg.discount}
                              </span>
                            )}
                          </div>
                        )}
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 font-medium">
                            {pkg.sessions} {pkg.sessions === 1 ? 'sesión' : 'sesiones'}
                          </span>
                          <div className="text-right">
                            {pkg.original && (
                              <div className="text-xs text-gray-400 line-through">
                                {pkg.original}
                              </div>
                            )}
                            <div className="text-xl font-bold text-sage-500">
                              {pkg.price}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowPreConsulta(true)}
                    className="w-full py-4 bg-sage-500 hover:bg-sage-600 text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Agendar ahora</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-lg border-2 border-sage-100"
          >
            <div className="flex items-start space-x-4">
              <Sparkles className="w-6 h-6 text-sage-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-serif text-sage-500 mb-4">
                  Sobre el proceso terapéutico
                </h4>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-sage-400 flex-shrink-0 mt-0.5" />
                    <p>La cantidad de sesiones es relativa y depende de cada caso</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-sage-400 flex-shrink-0 mt-0.5" />
                    <p>Los procesos terapéuticos suelen durar entre 12 a 20 sesiones</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-sage-400 flex-shrink-0 mt-0.5" />
                    <p>Al inicio son semanales, luego se espacian progresivamente</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <PreConsultaModal
        isOpen={showPreConsulta}
        onClose={() => setShowPreConsulta(false)}
        onComplete={handlePreConsultaComplete}
        source="prices"
      />

      <AgendamientoModal
        isOpen={showAgendamiento}
        onClose={() => setShowAgendamiento(false)}
        preConsultaData={preConsultaData}
      />
    </>
  )
}