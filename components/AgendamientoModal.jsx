'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, MapPin, Globe, Calendar } from 'lucide-react'
import { contactInfo } from '@/lib/sections'

export default function AgendamientoModal({ isOpen, onClose, preConsultaData }) {
  const [selectedModalidad, setSelectedModalidad] = useState(null)
  const [selectedPaquete, setSelectedPaquete] = useState(null)
  const [showPayment, setShowPayment] = useState(false)

  const modalidades = [
    {
      id: 'virtual-peru',
      title: 'Virtual - Perú',
      icon: MapPin,
      badge: 'Popular',
      info: 'Se paga por adelantado',
      paquetes: [
        { sessions: 1, price: 'S/ 200', original: null },
        { sessions: 4, price: 'S/ 750', original: 'S/ 800', discount: '-6%', recommended: true }
      ]
    },
    {
      id: 'presencial',
      title: 'Presencial - Lima',
      icon: MapPin,
      badge: 'Exclusivo',
      info: 'San Isidro (límite Magdalena) - Solo Viernes',
      paquetes: [
        { sessions: 1, price: 'S/ 240', original: null },
        { sessions: 4, price: 'S/ 910', original: 'S/ 960', discount: '-5%', recommended: true }
      ]
    },
    {
      id: 'internacional',
      title: 'Virtual - Internacional',
      icon: Globe,
      badge: 'Global',
      info: 'Válido solo pagando por adelantado',
      paquetes: [
        { sessions: 1, price: '73 USD', original: null },
        { sessions: 4, price: '268 USD', original: '292 USD', discount: '-8%', recommended: true }
      ]
    }
  ]

  const handleContinue = () => {
    if (!selectedModalidad || !selectedPaquete) {
      alert('Por favor selecciona una modalidad y un paquete')
      return
    }
    setShowPayment(true)
  }

  const handleWhatsApp = () => {
    const modalidad = modalidades.find(m => m.id === selectedModalidad)
    const paquete = modalidad.paquetes.find((p, idx) => idx === selectedPaquete)
    
    const mensaje = `Hola Nicole 🤍\n\nYa realicé el pago para agendar una cita.\n\n*Nombre:* ${preConsultaData.nombre}\n*Motivo de consulta:* ${preConsultaData.motivo}\n*Modalidad:* ${modalidad.title}\n*Paquete:* ${paquete.sessions} ${paquete.sessions === 1 ? 'sesión' : 'sesiones'} - ${paquete.price}\n*País/Ciudad:* ${preConsultaData.pais}\n\nAdjunto la captura del pago.\nGracias ✨`
    
    const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(/\+|\s/g, '')}?text=${encodeURIComponent(mensaje)}`
    window.open(whatsappUrl, '_blank')
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70] flex items-end sm:items-center justify-center" onClick={onClose}>
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-t-3xl sm:rounded-3xl w-full sm:max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
        >
          {!showPayment ? (
            // SELECCIÓN DE MODALIDAD Y PAQUETE
            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-2xl font-serif text-sage-500">Agendar cita</h3>
                  <p className="text-sm text-gray-500 mt-1">Selecciona modalidad y paquete</p>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-sage-50 rounded-full transition-colors">
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Modalidades */}
              <div className="space-y-4 mb-6">
                <h4 className="font-medium text-gray-700 mb-3">1. Selecciona modalidad:</h4>
                <div className="grid sm:grid-cols-3 gap-4">
                  {modalidades.map((modalidad, index) => (
                    <motion.button
                      key={modalidad.id}
                      onClick={() => {
                        setSelectedModalidad(modalidad.id)
                        setSelectedPaquete(null)
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`relative p-5 rounded-2xl border-2 transition-all text-left ${
                        selectedModalidad === modalidad.id
                          ? 'border-sage-400 bg-sage-50'
                          : 'border-sage-200 bg-white hover:border-sage-300'
                      }`}
                    >
                      {modalidad.badge && (
                        <span className="absolute -top-2 left-4 px-3 py-1 bg-sage-500 text-white text-xs font-bold rounded-full">
                          {modalidad.badge}
                        </span>
                      )}
                      
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          selectedModalidad === modalidad.id ? 'bg-sage-400' : 'bg-sage-100'
                        }`}>
                          <modalidad.icon className={`w-5 h-5 ${
                            selectedModalidad === modalidad.id ? 'text-white' : 'text-sage-500'
                          }`} />
                        </div>
                        {selectedModalidad === modalidad.id && (
                          <div className="w-6 h-6 bg-sage-400 rounded-full flex items-center justify-center">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </div>
                      
                      <h5 className="font-bold text-sage-600 mb-1">{modalidad.title}</h5>
                      <p className="text-xs text-gray-500">{modalidad.info}</p>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Paquetes (solo si hay modalidad seleccionada) */}
              {selectedModalidad && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <h4 className="font-medium text-gray-700 mb-3">2. Selecciona paquete:</h4>
                  <div className="space-y-3">
                    {modalidades.find(m => m.id === selectedModalidad).paquetes.map((paquete, idx) => (
                      <motion.button
                        key={idx}
                        onClick={() => setSelectedPaquete(idx)}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className={`w-full p-5 rounded-2xl border-2 transition-all text-left ${
                          selectedPaquete === idx
                            ? 'border-sage-400 bg-sage-50'
                            : paquete.recommended
                            ? 'border-sage-300 bg-sage-50/50'
                            : 'border-sage-200 bg-white'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            {selectedPaquete === idx && (
                              <div className="w-6 h-6 bg-sage-400 rounded-full flex items-center justify-center flex-shrink-0">
                                <Check className="w-4 h-4 text-white" />
                              </div>
                            )}
                            <div>
                              <div className="flex items-center space-x-2 mb-1">
                                <span className="font-bold text-gray-800">
                                  {paquete.sessions} {paquete.sessions === 1 ? 'sesión' : 'sesiones'}
                                </span>
                                {paquete.recommended && (
                                  <span className="px-2 py-0.5 bg-sage-400 text-white text-xs font-bold rounded-full">
                                    Recomendado
                                  </span>
                                )}
                                {paquete.discount && (
                                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                                    {paquete.discount}
                                  </span>
                                )}
                              </div>
                              {paquete.original && (
                                <span className="text-xs text-gray-400 line-through">
                                  {paquete.original}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-2xl font-bold text-sage-500">{paquete.price}</span>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Botón Continuar */}
              {selectedModalidad && selectedPaquete !== null && (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={handleContinue}
                  className="w-full mt-6 py-4 bg-sage-500 hover:bg-sage-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Continuar al pago</span>
                </motion.button>
              )}
            </div>
          ) : (
            // DATOS DE PAGO
            <div className="p-6 sm:p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💳</span>
                </div>
                <h3 className="text-2xl font-serif text-sage-500 mb-2">Datos de pago</h3>
                <p className="text-sm text-gray-500">Realiza el pago y envíame el comprobante</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-sage-50 rounded-2xl p-5 border-2 border-sage-200">
                  <p className="text-sm text-gray-600 mb-2">Transferencia Interbank:</p>
                  <p className="font-mono text-lg font-bold text-sage-600 select-all">{contactInfo.interbank}</p>
                </div>

                <div className="bg-sage-50 rounded-2xl p-5 border-2 border-sage-200">
                  <p className="text-sm text-gray-600 mb-2">Yape / Plin:</p>
                  <p className="font-mono text-lg font-bold text-sage-600 select-all">{contactInfo.yape}</p>
                </div>
              </div>

              <div className="bg-cream rounded-2xl p-4 mb-6 text-center">
                <p className="text-sm font-medium text-gray-700">Envíame la captura del pago por WhatsApp</p>
                <p className="text-xs text-gray-500 mt-1">indicando tu nombre y modalidad elegida</p>
              </div>

              <button
                onClick={handleWhatsApp}
                className="w-full py-4 bg-green-500 hover:bg-green-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all mb-3"
              >
                Enviar comprobante por WhatsApp
              </button>

              <button
                onClick={() => setShowPayment(false)}
                className="w-full py-3 text-gray-500 hover:text-gray-700 transition-colors"
              >
                ← Volver
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
