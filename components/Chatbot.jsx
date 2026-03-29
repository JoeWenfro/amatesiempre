'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'
import PreConsultaModal from './PreConsultaModal'
import AgendamientoModal from './AgendamientoModal'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    issue: '',
    firstTime: '',
    urgent: ''
  })
  const [messages, setMessages] = useState([])
  const [showPreConsulta, setShowPreConsulta] = useState(false)
  const [showAgendamiento, setShowAgendamiento] = useState(false)
  const [preConsultaData, setPreConsultaData] = useState(null)
  const messagesEndRef = useRef(null)
  const hasInitialized = useRef(false)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const addBotMessage = useCallback((text, options = null, action = null) => {
    setMessages(prev => [...prev, { 
      type: 'bot', 
      text, 
      options,
      action,
      id: Date.now() + Math.random()
    }])
  }, [])

  const addUserMessage = useCallback((text) => {
    setMessages(prev => [...prev, { 
      type: 'user', 
      text,
      id: Date.now() + Math.random()
    }])
  }, [])

  useEffect(() => {
    if (isOpen && !hasInitialized.current) {
      hasInitialized.current = true
      
      const timer1 = setTimeout(() => {
        addBotMessage('Hola 🤍 gracias por escribirme.')
      }, 800)
      
      const timer2 = setTimeout(() => {
        addBotMessage('Estoy aquí para acompañarte.')
      }, 2200)
      
      const timer3 = setTimeout(() => {
        addBotMessage('Antes de continuar, me gustaría entender un poquito cómo te sientes hoy.')
      }, 3800)
      
      const timer4 = setTimeout(() => {
        addBotMessage('¿Cómo te gustaría que te llame?')
        setStep(1)
      }, 5600)

      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
        clearTimeout(timer3)
        clearTimeout(timer4)
      }
    }
    
    if (!isOpen && hasInitialized.current) {
      hasInitialized.current = false
      setMessages([])
      setStep(0)
      setInputValue('')
      setFormData({
        name: '',
        issue: '',
        firstTime: '',
        urgent: ''
      })
    }
  }, [isOpen, addBotMessage])

  const finalizarChatbot = useCallback(() => {
    setTimeout(() => {
      addBotMessage('Gracias por compartir todo esto conmigo 🤍')
    }, 800)
    setTimeout(() => {
      addBotMessage('El siguiente paso es agendar tu sesión.')
    }, 2400)
    setTimeout(() => {
      addBotMessage('A continuación puedes agendar tu cita. Luego de enviarme el comprobante, coordinamos fecha y hora ✨', null, 'agendar')
      setStep(6)
    }, 4200)
  }, [addBotMessage])

  const handleSend = (value) => {
    if (!value.trim() && step !== 3 && step !== 4 && step !== 5) return

    const responseValue = value || inputValue
    addUserMessage(responseValue)
    setInputValue('')

    if (step === 1) {
      setFormData(prev => ({ ...prev, name: responseValue }))
      setTimeout(() => {
        addBotMessage(`Gracias, ${responseValue}. 🤍`)
      }, 900)
      setTimeout(() => {
        addBotMessage('Cuéntame, ¿qué te trajo hoy por aquí?')
        setStep(2)
      }, 2500)
    } 
    else if (step === 2) {
      setFormData(prev => ({ ...prev, issue: responseValue }))
      setTimeout(() => {
        addBotMessage('Gracias por confiarme esto 🤍')
      }, 900)
      setTimeout(() => {
        addBotMessage('¿Es la primera vez que consideras iniciar terapia?', ['Sí', 'No'])
        setStep(3)
      }, 2500)
    }
    else if (step === 3) {
      setFormData(prev => ({ ...prev, firstTime: responseValue }))
      setTimeout(() => {
        addBotMessage('¿Sientes que estás en una situación urgente en este momento?', ['Sí', 'No'])
        setStep(4)
      }, 1200)
    }
    else if (step === 4) {
      setFormData(prev => ({ ...prev, urgent: responseValue }))
      
      if (responseValue === 'Sí') {
        setTimeout(() => {
          addBotMessage('⚠️ Este espacio no reemplaza servicios de emergencia.')
        }, 900)
        setTimeout(() => {
          addBotMessage('Si te encuentras en riesgo inmediato, por favor comunícate con los servicios de emergencia de tu país o una línea de ayuda local.')
        }, 2500)
        setTimeout(() => {
          addBotMessage('¿Te gustaría agendar una cita cuando te sientas más estable?', ['Sí, agendar', 'Ahora no'])
          setStep(5)
        }, 4500)
      } else {
        finalizarChatbot()
      }
    }
    else if (step === 5) {
      if (responseValue === 'Sí, agendar') {
        finalizarChatbot()
      } else {
        setTimeout(() => {
          addBotMessage('Entiendo. Estoy aquí cuando me necesites 🤍')
        }, 900)
        setTimeout(() => {
          addBotMessage('Puedes escribirme cuando te sientas lista/o.', null, 'close')
        }, 2500)
      }
    }
  }

  const handleScheduleClick = () => {
    const chatPreConsultaData = {
      nombre: formData.name,
      pais: '',
      motivo: formData.issue,
      primeraVez: formData.firstTime,
      urgente: formData.urgent
    }
    
    setPreConsultaData(chatPreConsultaData)
    setIsOpen(false)
    setShowPreConsulta(true)
  }

  const handlePreConsultaComplete = (data) => {
    setPreConsultaData(data)
    setShowPreConsulta(false)
    setShowAgendamiento(true)
  }

  return (
    <>
      <motion.button
        data-chatbot-trigger
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-sage-500 hover:bg-sage-600 text-white rounded-full shadow-2xl flex items-center justify-center z-40 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          boxShadow: [
            '0 8px 32px rgba(143, 174, 158, 0.3)',
            '0 8px 40px rgba(143, 174, 158, 0.5)',
            '0 8px 32px rgba(143, 174, 158, 0.3)'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <MessageCircle className="w-7 h-7" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-3xl shadow-2xl z-50 overflow-hidden border-2 border-sage-100"
          >
            <div className="bg-gradient-to-r from-sage-400 to-sage-500 text-white p-5 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">🌱</span>
                </div>
                <div>
                  <p className="font-bold">Nicole</p>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
                    <span className="text-xs text-sage-100">En línea</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 rounded-full p-2 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="h-[450px] overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-cream to-white">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className="max-w-[85%]">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`rounded-3xl px-5 py-3 ${
                        msg.type === 'user'
                          ? 'bg-sage-400 text-white'
                          : 'bg-white text-gray-800 shadow-md border border-sage-100'
                      }`}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
                        {msg.text}
                      </p>
                    </motion.div>
                    
                    {msg.options && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {msg.options.map((option, idx) => (
                          <motion.button
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            onClick={() => handleSend(option)}
                            className="px-5 py-2 bg-sage-50 hover:bg-sage-100 text-sage-600 rounded-full text-sm font-medium transition-all border border-sage-200 hover:border-sage-300"
                          >
                            {option}
                          </motion.button>
                        ))}
                      </div>
                    )}

                    {msg.action === 'agendar' && (
                      <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        onClick={handleScheduleClick}
                        className="w-full mt-4 px-6 py-4 bg-sage-500 hover:bg-sage-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all"
                      >
                        Agendar mi cita
                      </motion.button>
                    )}

                    {msg.action === 'close' && (
                      <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        onClick={() => setIsOpen(false)}
                        className="w-full mt-4 px-6 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-2xl font-medium transition-all"
                      >
                        Cerrar
                      </motion.button>
                    )}
                  </div>
                </div>
              ))}
              
              <div ref={messagesEndRef} />
            </div>

            {(step === 1 || step === 2) && (
              <div className="p-4 border-t border-sage-100 bg-white">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    if (inputValue.trim()) {
                      handleSend(inputValue)
                    }
                  }}
                  className="flex items-center space-x-2"
                >
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Escribe aquí..."
                    className="flex-1 px-5 py-3 border-2 border-sage-200 rounded-full focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent text-gray-800 placeholder-gray-400"
                    autoComplete="off"
                    autoFocus
                    style={{ fontSize: '16px' }}
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    disabled={!inputValue.trim()}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg ${
                      inputValue.trim()
                        ? 'bg-sage-500 hover:bg-sage-600 text-white'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <Send className="w-5 h-5" />
                  </motion.button>
                </form>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <PreConsultaModal
        isOpen={showPreConsulta}
        onClose={() => setShowPreConsulta(false)}
        onComplete={handlePreConsultaComplete}
        source="chatbot"
        initialData={preConsultaData}
      />

      <AgendamientoModal
        isOpen={showAgendamiento}
        onClose={() => setShowAgendamiento(false)}
        preConsultaData={preConsultaData}
      />
    </>
  )
}
