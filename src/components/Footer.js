import styles from './Footer.module.css';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.column}>
                        <h3>LUXURY ESTATE</h3>
                        <p>
                            Somos líderes en el mercado inmobiliario de lujo en Miami y Nueva York.
                            Comprometidos con la excelencia y la satisfacción exclusiva de nuestros clientes.
                        </p>
                    </div>

                    <div className={styles.column}>
                        <h3>Contacto</h3>
                        <ul>
                            <li>123 Ocean Drive, Miami Beach, FL</li>
                            <li>+1 (555) 123-4567</li>
                            <li>contacto@luxuryestate.com</li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h3>Enlaces</h3>
                        <ul>
                            <li><Link href="/propiedades">Propiedades</Link></li>
                            <li><Link href="/nosotros">Sobre Nosotros</Link></li>
                            <li><Link href="/contacto">Contacto</Link></li>
                            <li><Link href="/politica">Política de Privacidad</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h3>Síguenos</h3>
                        <div style={{ display: 'flex', gap: '15px', fontSize: '1.5rem', color: '#94a3b8' }}>
                            <FaFacebook />
                            <FaInstagram />
                            <FaTwitter />
                            <FaLinkedin />
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    &copy; {new Date().getFullYear()} Luxury Estate. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}
