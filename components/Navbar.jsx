'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Heart } from 'lucide-react'
import { scrollToSection } from '@/lib/sections'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Inicio', href: 'inicio' },
    { name: 'Sobre mí', href: 'sobre-mi' },
    { name: 'Servicios', href: 'servicios' },
    { name: 'Precios', href: 'precios' },
    { name: 'Guías', href: 'guias' },
    { name: 'FAQ', href: 'faq' },
  ]

  const handleNavClick = (href) => {
    scrollToSection(href)
    setIsOpen(false)
  }

  return (
    <>
      {/* NAVBAR DESKTOP - Flotante estilo iOS */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden lg:block transition-all duration-500 ${
          isScrolled ? 'top-4' : 'top-6'
        }`}
      >
        <motion.div
          animate={{
            backdropFilter: isScrolled ? 'blur(20px)' : 'blur(10px)',
            boxShadow: isScrolled 
              ? '0 8px 32px rgba(143, 174, 158, 0.15), 0 0 0 1px rgba(143, 174, 158, 0.1) inset'
              : '0 4px 24px rgba(143, 174, 158, 0.1), 0 0 0 1px rgba(143, 174, 158, 0.08) inset'
          }}
          className={`glass-navbar rounded-full px-6 py-3 transition-all duration-500`}
        >
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection('inicio')}
              className="flex items-center space-x-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <Heart 
                  className="w-7 h-7 text-sage-500 transition-colors" 
                  strokeWidth={1.5} 
                  fill="none"
                />
                <motion.div
                  className="absolute inset-0"
                  animate={{ 
                    scale: [1, 1.3, 1], 
                    opacity: [0.3, 0, 0.3] 
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="w-7 h-7 text-sage-400" strokeWidth={1.5} />
                </motion.div>
              </div>
              <span className="text-sm font-serif text-sage-600 tracking-wider uppercase">
                Amatesiempre
              </span>
            </motion.button>

            {/* Nav Links */}
            <div className="flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-4 py-2 text-sm text-gray-700 hover:text-sage-600 transition-colors rounded-full group"
                >
                  {link.name}
                  <motion.span
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-sage-400 rounded-full group-hover:w-8 transition-all duration-300"
                  />
                </motion.button>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              onClick={() => scrollToSection('precios')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 bg-sage-400 hover:bg-sage-500 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Agendar cita
            </motion.button>
          </div>
        </motion.div>
      </motion.nav>

      {/* NAVBAR MOBILE - Flotante arriba */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-4 left-4 right-4 z-50 lg:hidden transition-all duration-500`}
      >
        <div className="glass-navbar rounded-full px-6 py-4 flex items-center justify-between shadow-xl">
          {/* Logo Mobile */}
          <motion.button
            onClick={() => scrollToSection('inicio')}
            className="flex items-center space-x-2"
            whileTap={{ scale: 0.95 }}
          >
            <Heart className="w-6 h-6 text-sage-500" strokeWidth={1.5} />
            <span className="text-sm font-serif text-sage-600 tracking-wider uppercase">
              Amatesiempre
            </span>
          </motion.button>

          {/* Hamburger Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-sage-50 hover:bg-sage-100 flex items-center justify-center transition-colors"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-sage-600" />
            ) : (
              <Menu className="w-5 h-5 text-sage-600" />
            )}
          </motion.button>
        </div>
      </motion.nav>

      {/* MOBILE MENU - Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop Blur */}
            <motion.div
              initial={{ backdropFilter: 'blur(0px)' }}
              animate={{ backdropFilter: 'blur(20px)' }}
              exit={{ backdropFilter: 'blur(0px)' }}
              className="absolute inset-0 bg-white/70"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-center justify-center min-h-screen p-8"
            >
              <div className="glass-navbar rounded-3xl p-8 w-full max-w-sm shadow-2xl">
                <div className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.name}
                      onClick={() => handleNavClick(link.href)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className="block w-full text-left px-6 py-4 text-lg text-gray-700 hover:text-sage-600 hover:bg-sage-50 rounded-2xl transition-all"
                    >
                      {link.name}
                    </motion.button>
                  ))}
                  
                  <motion.button
                    onClick={() => {
                      handleNavClick('precios')
                      setIsOpen(false)
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block w-full mt-4 px-6 py-4 bg-sage-400 hover:bg-sage-500 text-white rounded-2xl text-center font-medium shadow-lg transition-all"
                  >
                    Agendar cita
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
