'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { AlertTriangle, Shield, FileText } from 'lucide-react'

export default function Legal() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="section-padding bg-gradient-to-b from-cream to-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Aviso de Emergencia */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-lg border-2 border-sage-200 mb-8"
          >
            <div className="flex items-start space-x-4">
              <AlertTriangle className="w-8 h-8 text-sage-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-serif text-sage-500 mb-3">
                  Aviso Importante
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Este espacio no reemplaza servicios de emergencia.</strong>
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Si te encuentras en riesgo inmediato, por favor comunícate con los servicios de emergencia de tu país o una línea de ayuda local.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Información Legal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-6"
          >
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-sage-100">
              <Shield className="w-6 h-6 text-sage-400 mb-3" />
              <h4 className="font-medium text-sage-500 mb-2">Confidencialidad</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Todo lo compartido en sesión es estrictamente confidencial, respetando el código de ética profesional.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-sage-100">
              <FileText className="w-6 h-6 text-sage-400 mb-3" />
              <h4 className="font-medium text-sage-500 mb-2">Consentimiento Informado</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Al iniciar el proceso terapéutico, se firmará un consentimiento informado que explica derechos y responsabilidades.
              </p>
            </div>
          </motion.div>

          {/* Links Legales */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <button className="hover:text-sage-500 transition-colors">
                Términos y Condiciones
              </button>
              <span>•</span>
              <button className="hover:text-sage-500 transition-colors">
                Política de Privacidad
              </button>
              <span>•</span>
              <button className="hover:text-sage-500 transition-colors">
                Política de Cookies
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
