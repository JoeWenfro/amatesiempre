'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, AlertTriangle } from 'lucide-react'

export default function PreConsultaModal({ isOpen, onClose, onComplete, source, initialData }) {
  const [formData, setFormData] = useState({
    nombre: initialData?.nombre || '',
    pais: initialData?.pais || '',
    motivo: initialData?.motivo || '',
    primeraVez: initialData?.primeraVez || '',
    urgente: initialData?.urgente || ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (formData.urgente === 'Sí') {
      alert('⚠️ Este espacio no reemplaza servicios de emergencia.\n\nSi te encuentras en riesgo inmediato, por favor comunícate con los servicios de emergencia de tu país o una línea de ayuda local.')
      return
    }

    // Pasar datos al componente padre
    onComplete(formData)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4" onClick={onClose}>
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-3xl w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl"
        >
          <div className="p-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-2xl font-serif text-sage-500">Pre-consulta</h3>
                <p className="text-sm text-gray-500 mt-1">Ayúdame a conocerte mejor</p>
              </div>
              <button 
                onClick={onClose} 
                className="p-2 hover:bg-sage-50 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Nombre */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre y apellido <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-sage-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent"
                  placeholder="Ej: María González"
                  style={{ fontSize: '16px' }}
                />
              </div>

              {/* País/Ciudad */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  País / Ciudad (zona horaria) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.pais}
                  onChange={(e) => setFormData({...formData, pais: e.target.value})}
                  placeholder="Ej: Lima, Perú"
                  className="w-full px-4 py-3 border-2 border-sage-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent"
                  style={{ fontSize: '16px' }}
                />
              </div>

              {/* Motivo */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Motivo de consulta <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  value={formData.motivo}
                  onChange={(e) => setFormData({...formData, motivo: e.target.value})}
                  rows="3"
                  placeholder="Cuéntame brevemente qué te trae por aquí..."
                  className="w-full px-4 py-3 border-2 border-sage-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent resize-none"
                  style={{ fontSize: '16px' }}
                />
              </div>

              {/* Primera vez */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  ¿Es tu primera vez en terapia? <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({...formData, primeraVez: 'Sí'})}
                    className={`flex-1 py-3 rounded-2xl font-medium transition-all border-2 ${
                      formData.primeraVez === 'Sí'
                        ? 'bg-sage-400 text-white border-sage-400'
                        : 'bg-white text-sage-600 border-sage-200 hover:bg-sage-50'
                    }`}
                  >
                    Sí
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({...formData, primeraVez: 'No'})}
                    className={`flex-1 py-3 rounded-2xl font-medium transition-all border-2 ${
                      formData.primeraVez === 'No'
                        ? 'bg-sage-400 text-white border-sage-400'
                        : 'bg-white text-sage-600 border-sage-200 hover:bg-sage-50'
                    }`}
                  >
                    No
                  </button>
                </div>
              </div>

              {/* Urgente */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  ¿Te sientes en una situación urgente ahora? <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({...formData, urgente: 'Sí'})}
                    className={`flex-1 py-3 rounded-2xl font-medium transition-all border-2 ${
                      formData.urgente === 'Sí'
                        ? 'bg-red-400 text-white border-red-400'
                        : 'bg-white text-gray-600 border-sage-200 hover:bg-red-50'
                    }`}
                  >
                    Sí
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({...formData, urgente: 'No'})}
                    className={`flex-1 py-3 rounded-2xl font-medium transition-all border-2 ${
                      formData.urgente === 'No'
                        ? 'bg-sage-400 text-white border-sage-400'
                        : 'bg-white text-sage-600 border-sage-200 hover:bg-sage-50'
                    }`}
                  >
                    No
                  </button>
                </div>
              </div>

              {/* Warning si es urgente */}
              {formData.urgente === 'Sí' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border-2 border-red-200 rounded-2xl p-4 flex items-start space-x-3"
                >
                  <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-red-700">
                    <p className="font-medium mb-1">Este espacio no reemplaza servicios de emergencia</p>
                    <p className="text-xs">Si te encuentras en riesgo inmediato, contacta los servicios de emergencia de tu país.</p>
                  </div>
                </motion.div>
              )}

              {/* Botón Submit */}
              <button
                type="submit"
                disabled={!formData.nombre || !formData.pais || !formData.motivo || !formData.primeraVez || !formData.urgente}
                className={`w-full py-4 rounded-2xl font-bold shadow-lg transition-all ${
                  formData.nombre && formData.pais && formData.motivo && formData.primeraVez && formData.urgente
                    ? 'bg-sage-500 hover:bg-sage-600 text-white hover:shadow-xl'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                Continuar
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
