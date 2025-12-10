import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Configuración de fuentes (Google Fonts)
const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-heading' });

export const metadata = {
  title: 'Inmobiliaria Premium - Propiedades de Lujo',
  description: 'Descubra las propiedades más exclusivas en Miami y Nueva York. Venta y alquiler de inmuebles de alta gama.',
  keywords: ['inmobiliaria', 'real estate', 'lujo', 'propiedades', 'venta', 'alquiler', 'miami', 'ny'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Navbar />
        <main style={{ minHeight: 'calc(100vh - 300px)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
