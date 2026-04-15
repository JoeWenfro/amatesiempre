'use client'

import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Heart, Sparkles, GraduationCap, Brain, Shield, X, Zap } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [isModalOpen, setIsModalOpen] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const highlights = [
    {
      icon: Heart,
      title: 'Experiencia Personal',
      text: 'También pasé por momentos difíciles y sé lo que significa pedir ayuda'
    },
    {
      icon: Shield,
      title: 'Enfoque Empático',
      text: 'No desde el "todo va a estar bien", sino desde el "aquí estoy contigo"'
    },
    {
      icon: Sparkles,
      title: 'Aprendizaje Continuo',
      text: 'Sentir no es un error, es parte de crecer y conocerse mejor'
    }
  ]

  const credentials = [
    {
      icon: Award,
      title: 'C.M.P. 65892',
      subtitle: 'Psicóloga Colegiada'
    },
    {
      icon: GraduationCap,
      title: 'Maestría en Gerencia',
      subtitle: 'Servicios de Salud'
    },
    {
      icon: Brain,
      title: 'TCC Especialista',
      subtitle: 'Terapia Cognitivo Conductual'
    }
  ]

  return (
    <section id="sobre-mi" className="section-padding bg-gradient-to-br from-slate-50 via-rose-50 to-sage-50 relative overflow-hidden">
      {/* Decorative animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.15, 0.35, 0.15],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-80 h-96 bg-rose-200 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
            x: [0, -50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 30, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-sage-200 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.2, 0.08]
          }}
          transition={{ duration: 28, repeat: Infinity, delay: 1 }}
          className="absolute top-1/2 right-1/4 w-72 h-72 bg-amber-100 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header - Enhanced */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <Heart className="w-16 h-16 text-rose-400 mx-auto" strokeWidth={1} fill="currentColor" />
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-rose-400 rounded-full blur-2xl opacity-30 -z-10"
                />
              </div>
            </motion.div>
            <motion.h2 className="text-5xl md:text-6xl font-serif text-sage-600 mb-4 bg-gradient-to-r from-sage-600 via-rose-500 to-sage-600 bg-clip-text text-transparent">
              Sobre mí
            </motion.h2>
            <motion.div 
              layoutId="underline"
              className="w-24 h-1.5 bg-gradient-to-r from-rose-400 via-sage-400 to-rose-400 mx-auto rounded-full"
              animate={{ width: [60, 96, 60] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>

          {/* Highlights - Enhanced 3 Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.08, y: -15 }}
                className="group"
              >
                <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 border-2 border-sage-100/50 hover:border-rose-300 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl h-full overflow-hidden">
                  {/* Gradient background on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-rose-50 to-sage-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                  />
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.3 }}
                    transition={{ duration: 0.8 }}
                    className="w-16 h-16 bg-gradient-to-br from-rose-100 to-sage-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-rose-200 group-hover:to-sage-200 transition-all relative z-10"
                  >
                    <item.icon className="w-8 h-8 text-rose-500" strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="text-xl font-serif text-sage-600 mb-3 relative z-10">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed relative z-10">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main Story - Enhanced 3 Column Layout */}
          <motion.div variants={itemVariants} className="max-w-7xl mx-auto mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Left: Personal Story - Main Content */}
              <motion.div 
                whileHover={{ scale: 1.02, y: -8 }}
                className="md:col-span-2 relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-rose-200 via-sage-200 to-amber-200 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-300" />
                <div className="relative bg-white/85 backdrop-blur-sm rounded-3xl p-10 shadow-xl border-2 border-white/50 hover:border-rose-300/50 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-8">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-14 h-14 bg-gradient-to-br from-rose-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Heart className="w-7 h-7 text-white" strokeWidth={1.5} fill="white" />
                    </motion.div>
                    <h3 className="text-3xl font-serif text-sage-600">
                      Mi Historia
                    </h3>
                  </div>
                  
                  <div className="space-y-5 text-gray-800 leading-relaxed text-base prose prose-sm">
                    <motion.p variants={itemVariants} className="text-lg leading-relaxed">
                      Nací en <span className="font-bold text-rose-500">Ilo, Perú</span> y, como muchas personas, crecí en un entorno que fue moldeando quién soy hoy.
                    </motion.p>
                    <motion.p variants={itemVariants} className="text-lg leading-relaxed">
                      Desde muy joven aprendí a <span className="font-semibold">observar, sentir y cuestionarme</span> sobre lo que pasaba dentro de mí y a mi alrededor.
                    </motion.p>
                    <motion.p variants={itemVariants} className="text-lg leading-relaxed">
                      Hubo etapas en las que me sentí confundida, con emociones que no sabía cómo entender ni cómo expresar.
                    </motion.p>
                    
                    <motion.div 
                      variants={itemVariants}
                      className="bg-gradient-to-r from-rose-50 to-amber-50 rounded-2xl p-6 border-l-4 border-rose-400 my-6"
                    >
                      <p className="italic text-rose-700 font-semibold text-lg">
                        "Con el tiempo aprendí algo importante: <span className="not-italic">sentir no es un error, es parte de crecer.</span>"
                      </p>
                    </motion.div>

                    <motion.p variants={itemVariants} className="text-lg leading-relaxed">
                      También atravesé momentos de desánimo que me llevaron a <span className="font-semibold">conocerme mejor</span> y a entender que <span className="font-bold text-sage-600">pedir ayuda también es un acto de valentía</span>.
                    </motion.p>
                    <motion.p variants={itemVariants} className="text-lg leading-relaxed">
                      Hoy soy una adulta consciente y agradecida con mi historia, especialmente con <span className="font-semibold text-rose-500">mis abuelos y mi familia</span>, quienes fueron un soporte emocional importante.
                    </motion.p>
                    <motion.p variants={itemVariants} className="text-lg leading-relaxed">
                      Todo lo vivido no me define, pero sí me permitió desarrollar algo esencial en mi trabajo: <span className="font-bold text-sage-600">acompañar desde la empatía, la paciencia y el respeto</span>.
                    </motion.p>

                    <motion.div 
                      variants={itemVariants}
                      className="bg-white border-2 border-rose-200 rounded-2xl p-6 text-center my-6 hover:shadow-lg transition-all duration-300"
                    >
                      <p className="text-gray-700 mb-2">No desde el <span className="italic text-gray-600">"todo va a estar bien"</span></p>
                      <p className="text-2xl font-serif text-rose-500 font-bold">
                        Sino desde el "aquí estoy contigo" 🤍
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Right: Photo + Credentials - Interactive */}
              <motion.div 
                className="flex flex-col gap-6 h-fit"
              >
                {/* Photo Modal Trigger */}
                <motion.div 
                  whileHover={{ scale: 1.05, y: -10 }}
                  onClick={() => setIsModalOpen(true)}
                  className="cursor-pointer group relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-br from-rose-300 to-sage-300 rounded-3xl blur-lg opacity-50 group-hover:opacity-100 transition-all duration-300" />
                  <motion.div 
                    className="relative bg-white rounded-3xl p-5 shadow-xl overflow-hidden border-2 border-white/80 hover:border-rose-400 transition-all duration-300"
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-sage-100 to-rose-100">
                      <Image
                        src="/nicole-photo.jpg"
                        alt="Nicole Valdivia Carazas - Psicóloga"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="flex items-center gap-2 text-white text-sm font-semibold"
                        >
                          <Sparkles className="w-4 h-4" />
                          Click para ampliar
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Credentials Card - Enhanced */}
                <motion.div 
                  whileHover={{ scale: 1.03, y: -8 }}
                  className="relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-sage-200 to-amber-200 rounded-3xl blur-lg opacity-30" />
                  <motion.div 
                    className="relative bg-white/85 backdrop-blur-sm rounded-3xl p-7 shadow-lg border-2 border-white/50 hover:border-rose-300/50 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3 mb-6">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="w-12 h-12 bg-gradient-to-br from-rose-400 to-sage-400 rounded-full flex items-center justify-center"
                      >
                        <Award className="w-6 h-6 text-white" strokeWidth={1.5} />
                      </motion.div>
                      <h3 className="text-2xl font-serif text-sage-600">
                        Formación
                      </h3>
                    </div>

                    <div className="space-y-4 text-gray-800 text-sm">
                      <motion.div variants={itemVariants}>
                        <p className="font-bold text-rose-500 text-base">Nicole Valdivia Carazas</p>
                        <p className="text-xs text-gray-600 mt-1">Psicóloga habilitada</p>
                      </motion.div>
                      
                      <motion.div variants={itemVariants} className="bg-gradient-to-r from-rose-50 to-amber-50 rounded-2xl p-4 border-l-4 border-rose-400">
                        <p className="font-bold text-rose-600 text-base">C.Ps.P. 65892</p>
                        <p className="text-xs text-gray-700 mt-2 font-semibold">Fundadora de AMATESIEMPRE</p>
                      </motion.div>

                      <motion.p variants={itemVariants} className="text-xs leading-relaxed text-gray-700">
                        Especialista en <span className="font-bold text-sage-600">Terapia Cognitivo Conductual (TCC)</span> respaldada por evidencia científica
                      </motion.p>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Interactive Badge */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="relative"
                >
                  <div className="bg-gradient-to-r from-rose-100 to-sage-100 rounded-full px-6 py-3 border-2 border-rose-300 text-center shadow-md">
                    <div className="flex items-center justify-center gap-2 text-rose-600 font-semibold text-sm">
                      <Zap className="w-4 h-4 fill-current" />
                      Conectada desde 2020
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Credentials - Enhanced 3 Cards */}
          <motion.div variants={itemVariants} className="max-w-5xl mx-auto mb-16">
            <div className="grid md:grid-cols-3 gap-6">
              {credentials.map((cred, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -15, rotate: 2 }}
                  variants={itemVariants}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-rose-200 to-sage-200 rounded-3xl blur-lg opacity-40 group-hover:opacity-100 transition-all duration-300" />
                  <motion.div
                    className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border-2 border-white/70 text-center hover:border-rose-400 transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ scale: 1.3, rotate: 360 }}
                      transition={{ duration: 0.8 }}
                      className="w-20 h-20 mx-auto mb-5 bg-gradient-to-br from-rose-100 to-sage-100 rounded-2xl flex items-center justify-center"
                    >
                      <cred.icon className="w-10 h-10 text-rose-500" strokeWidth={1.5} />
                    </motion.div>
                    <h4 className="font-bold text-lg text-sage-600 mb-2">{cred.title}</h4>
                    <p className="text-sm text-gray-700 font-medium">{cred.subtitle}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Message - Enhanced */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.08, y: -5 }}
              className="inline-flex items-center space-x-3 bg-white/70 backdrop-blur-sm px-10 py-6 rounded-full border-2 border-rose-300 shadow-xl hover:shadow-2xl hover:border-rose-500 transition-all duration-300 bg-gradient-to-r from-white via-rose-50 to-white"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Sparkles className="w-6 h-6 text-rose-400" strokeWidth={1.5} />
              </motion.div>
              <p className="text-gray-800 font-bold text-lg bg-gradient-to-r from-sage-600 to-rose-500 bg-clip-text text-transparent">
                Acompaño procesos desde la ciencia y la experiencia humana
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal - Photo Gallery */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl hover:bg-rose-100 transition-colors z-60 border-2 border-rose-300"
              >
                <X className="w-6 h-6 text-rose-500" strokeWidth={3} />
              </motion.button>

              {/* Photo Container */}
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/nicole-photo.jpg"
                  alt="Nicole Valdivia Carazas - Psicóloga"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Info Overlay */}
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-white"
                >
                  <h2 className="text-3xl font-serif font-bold mb-2">Nicole Valdivia</h2>
                  <p className="text-sm font-semibold opacity-90">Psicóloga Clínica | Especialista en TCC</p>
                  <p className="text-xs opacity-75 mt-2">C.Ps.P. 65892</p>
                </motion.div>
              </div>

              {/* Navigation Text */}
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-center text-white text-sm mt-4 font-medium"
              >
                Click para cerrar
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
