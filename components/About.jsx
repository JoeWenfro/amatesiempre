'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Heart, Sparkles, GraduationCap, Brain, Shield } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

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
    <section id="sobre-mi" className="section-padding bg-gradient-to-b from-white via-cream to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-sage-100 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-sage-200 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-4"
            >
              <Heart className="w-12 h-12 text-sage-400 mx-auto" strokeWidth={1.5} />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-serif text-sage-500 mb-4">
              Sobre mí
            </h2>
            <div className="w-20 h-1 bg-sage-400 mx-auto rounded-full" />
          </motion.div>

          {/* Highlights - 3 Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-6 border-2 border-sage-100 hover:border-sage-300 transition-all duration-300 cursor-pointer shadow-md hover:shadow-2xl h-full">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 bg-sage-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-sage-200 transition-colors"
                  >
                    <item.icon className="w-7 h-7 text-sage-500" strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="text-lg font-serif text-sage-500 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main Story - 3 Column Layout with Photo */}
          <motion.div variants={itemVariants} className="max-w-7xl mx-auto mb-12">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Left: Personal Story */}
              <motion.div 
                whileHover={{ scale: 1.02, y: -5 }}
                className="md:col-span-2 bg-white rounded-3xl p-8 shadow-lg border-2 border-sage-100 hover:border-sage-300 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-sage-400 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-serif text-sage-500">
                    Mi Historia
                  </h3>
                </div>
                
                <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
                  <p>
                    Nací en <span className="font-medium text-sage-500">Ilo, Perú</span> y, como muchas personas, crecí en un entorno que fue moldeando quién soy hoy.
                  </p>
                  <p>
                    Desde muy joven aprendí a observar, sentir y cuestionarme sobre lo que pasaba dentro de mí y a mi alrededor.
                  </p>
                  <p>
                    Hubo etapas en las que me sentí confundida, con emociones que no sabía cómo entender ni cómo expresar.
                  </p>
                  <div className="bg-sage-50 rounded-2xl p-4 border-l-4 border-sage-400">
                    <p className="italic text-sage-600 font-medium">
                      Con el tiempo aprendí algo importante: sentir no es un error, es parte de crecer.
                    </p>
                  </div>
                  <p>
                    También atravesé momentos de desánimo que me llevaron a conocerme mejor y a entender que <span className="font-medium text-sage-500">pedir ayuda también es un acto de valentía</span>.
                  </p>
                  <p>
                    Hoy soy una adulta consciente y agradecida con mi historia, especialmente con <span className="font-medium text-sage-500">mis abuelos y mi familia</span>, quienes fueron un soporte emocional importante.
                  </p>
                  <p>
                    Todo lo vivido no me define, pero sí me permitió desarrollar algo esencial en mi trabajo: <span className="font-medium text-sage-500">acompañar desde la empatía, la paciencia y el respeto</span>.
                  </p>
                  <div className="bg-white border-2 border-sage-200 rounded-2xl p-4 text-center">
                    <p className="text-sage-600">
                      No desde el <span className="italic">"todo va a estar bien"</span>
                    </p>
                    <p className="text-lg font-serif text-sage-500 mt-2">
                      Sino desde el <span className="italic">"aquí estoy contigo" 🤍</span>
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right: Photo + Credentials */}
              <motion.div 
                whileHover={{ scale: 1.02, y: -5 }}
                className="flex flex-col gap-6 h-fit sticky top-20"
              >
                {/* Photo */}
                <motion.div 
                  className="bg-white rounded-3xl p-4 shadow-lg border-2 border-sage-100 hover:border-sage-300 transition-all duration-300 overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-sage-100">
                    <Image
                      src="/nicole-photo.jpg"
                      alt="Nicole Valdivia Carazas - Psicóloga"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </motion.div>

                {/* Credentials Card */}
                <motion.div 
                  className="bg-gradient-to-br from-sage-50 to-white rounded-3xl p-6 shadow-lg border-2 border-sage-100 hover:border-sage-300 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-sage-400 rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-serif text-sage-500">
                      Formación
                    </h3>
                  </div>

                  <div className="space-y-3 text-gray-700 text-sm">
                    <p>
                      <span className="font-medium text-sage-500">Nicole Valdivia Carazas</span>
                      <br />
                      <span className="text-xs text-gray-500">Psicóloga habilitada</span>
                    </p>
                    
                    <div className="bg-white rounded-2xl p-3 border-l-4 border-sage-400">
                      <p className="font-bold text-sage-500 text-sm">C.Ps.P. 65892</p>
                      <p className="text-xs text-gray-600 mt-1">Fundadora de AMATESIEMPRE</p>
                    </div>

                    <p className="text-xs leading-relaxed">
                      Especialista en <span className="font-medium text-sage-500">Terapia Cognitivo Conductual (TCC)</span>
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Credentials - 3 Cards */}
          <motion.div variants={itemVariants} className="max-w-5xl mx-auto mb-12">
            <div className="grid md:grid-cols-3 gap-6">
              {credentials.map((cred, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.08, y: -5 }}
                  className="bg-white rounded-3xl p-6 shadow-md border-2 border-sage-100 hover:border-sage-300 text-center hover:shadow-xl transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 mx-auto mb-4 bg-sage-100 rounded-2xl flex items-center justify-center"
                  >
                    <cred.icon className="w-8 h-8 text-sage-500" strokeWidth={1.5} />
                  </motion.div>
                  <h4 className="font-bold text-sage-500 mb-1">{cred.title}</h4>
                  <p className="text-sm text-gray-600">{cred.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Message */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center space-x-3 bg-white px-8 py-5 rounded-full border-2 border-sage-200 shadow-lg hover:shadow-xl hover:border-sage-300 transition-all"
            >
              <Sparkles className="w-6 h-6 text-sage-400" strokeWidth={1.5} />
              <p className="text-gray-700 font-medium">
                Acompaño procesos desde la ciencia y la experiencia humana
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
