// Configuración de secciones para scroll suave
export const sections = {
  inicio: 'inicio',
  sobreMi: 'sobre-mi',
  comoTrabajo: 'como-trabajo',
  servicios: 'servicios',
  precios: 'precios',
  guias: 'guias',
  testimonios: 'testimonios',
  faq: 'faq',
  contacto: 'contacto',
}

// Función para scroll suave
export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const offset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

// Datos de contacto
export const contactInfo = {
  whatsapp: '+51924444787',
  email: 'cp.amatesiempre@gmail.com',
  interbank: '3153347011532',
  yape: '+51 924 444 787',
  plin: '+51 924 444 787',
}

// Mensajes de WhatsApp
export const whatsappMessages = {
  agendarCita: (nombre, motivo, modalidad, ciudad) => {
    const mensaje = `Hola Nicole 🤍

Ya realicé el pago para agendar una cita.

Nombre: ${nombre}
Motivo de consulta: ${motivo}
Modalidad: ${modalidad}
País / ciudad: ${ciudad}

Adjunto la captura del pago.
Gracias ✨`
    return encodeURIComponent(mensaje)
  },
  
  comprarGuia: (guiaNombre) => {
    const mensaje = `Hola Nicole 🌱

Acabo de realizar el pago de la guía ${guiaNombre}.

¿Podrías enviármela por correo o por WhatsApp?
Adjunto la captura.

Gracias 🤍`
    return encodeURIComponent(mensaje)
  },
  
  consulta: () => {
    const mensaje = `Hola Nicole 🤍

Me gustaría recibir información para empezar terapia.
Gracias.`
    return encodeURIComponent(mensaje)
  }
}
