import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  title: 'AMATESIEMPRE | Psicología',
  description: 'Psicología basada en evidencia, con acompañamiento humano y a tu ritmo. Nicole Valdivia Carazas, psicóloga colegiada C.M.P. 65892.',
  keywords: 'psicología, terapia, salud mental, acompañamiento psicológico, TCC',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8FAE9E" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
