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
                            Desde 2016, referentes en el mercado inmobiliario premium de Buenos Aires.
                            Excelencia, discreción y resultados.
                        </p>
                    </div>

                    <div className={styles.column}>
                        <h3>Contacto</h3>
                        <ul>
                            <li>Av. Juana Manso 1500, Puerto Madero</li>
                            <li>+54 11 5555-0123</li>
                            <li>info@luxuryestate.com.ar</li>
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
                        <div style={{ display: 'flex', gap: '15px' }}>
                            {/* 
                                INSTRUCCIONES:
                                Para activar los enlaces, reemplaza el href="#" con la URL de tu red social.
                                Ejemplo: href="https://facebook.com/tupagina"
                            */}

                            {/* Facebook */}
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ fontSize: '1.5rem', color: '#94a3b8', transition: 'color 0.3s' }}>
                                <FaFacebook />
                            </a>

                            {/* Instagram */}
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ fontSize: '1.5rem', color: '#94a3b8', transition: 'color 0.3s' }}>
                                <FaInstagram />
                            </a>

                            {/* Twitter / X */}
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" style={{ fontSize: '1.5rem', color: '#94a3b8', transition: 'color 0.3s' }}>
                                <FaTwitter />
                            </a>

                            {/* LinkedIn */}
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ fontSize: '1.5rem', color: '#94a3b8', transition: 'color 0.3s' }}>
                                <FaLinkedin />
                            </a>
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
