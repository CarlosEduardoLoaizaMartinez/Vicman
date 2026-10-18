import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo_Narrow, Inter_Tight } from 'next/font/google'
import { CartProvider } from '@/components/cart-context'
import './globals.css'

const archivoNarrow = Archivo_Narrow({
  subsets: ['latin'],
  variable: '--font-archivo-narrow',
  display: 'swap',
})

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AgroVicman | Café, Cacao y Miel de Altura · Quillabamba, Cusco',
  description:
    'Café de especialidad Geisha y Bourbon, pasta pura de cacao 100% y miel silvestre del ACR Chuyapi Urusayhua, +1,750 m.s.n.m. Pedidos directos por WhatsApp.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#433C26',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${archivoNarrow.variable} ${interTight.variable} bg-background`}>
      <body className="antialiased">
        <CartProvider>{children}</CartProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
