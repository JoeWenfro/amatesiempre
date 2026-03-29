'use client'

import { motion } from 'framer-motion'
import { Heart, Mail, Phone, MapPin } from 'lucide-react'
import { contactInfo } from '@/lib/sections'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contacto" className="bg-sage-500 text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo y descripción */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="w-8 h-8" strokeWidth={1.5} />
              <span className="text-2xl font-serif">AMATESIEMPRE</span>
            </div>
            <p className="text-sage-100 leading-relaxed">
              Psicología basada en evidencia, con acompañamiento humano y a tu ritmo.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xl font-serif mb-4">Contacto</h3>
            <div className="space-y-3 text-sage-100">
              <a 
                href={`https://wa.me/${contactInfo.whatsapp.replace(/\+|\s/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-white transition-colors group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{contactInfo.whatsapp}</span>
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-3 hover:text-white transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{contactInfo.email}</span>
              </a>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5" />
                <span>San Isidro, Lima - Perú</span>
              </div>
            </div>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="text-xl font-serif mb-4">Horarios</h3>
            <div className="space-y-2 text-sage-100">
              <p><strong className="text-white">Virtual:</strong> Lunes a Sábado</p>
              <p><strong className="text-white">Presencial:</strong> Viernes</p>
              <p className="text-sm mt-4">
                Citas con previa coordinación
              </p>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-sage-400 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sage-100 text-sm">
            <p>© {currentYear} AMATESIEMPRE. Todos los derechos reservados.</p>
            <p>C.M.P. 65892 • Nicole Valdivia Carazas</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
