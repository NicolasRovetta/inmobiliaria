'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // En home es transparente inicialmente, en otras páginas es sólido (estilo scrolled) siempre
    const isHome = pathname === '/';

    // Detectar scroll para cambiar el estilo del navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={`${styles.navbar} ${isScrolled || !isHome ? styles.scrolled : ''}`}>
            <div className={styles.logo}>
                <Link href="/">LUXURY ESTATE</Link>
            </div>

            <button className={styles.mobileMenuBtn} onClick={toggleMenu}>
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.open : ''}`}>
                <li className={styles.navLink}><Link href="/">Inicio</Link></li>
                <li className={styles.navLink}><Link href="/propiedades">Propiedades</Link></li>
                <li className={styles.navLink}><Link href="/nosotros">Nosotros</Link></li>
                <li className={styles.navLink}><Link href="/contacto">Contacto</Link></li>
                {/* Acceso al panel de administración */}
                <li className={styles.navLink}>
                    <Link href="/admin" style={{ color: 'var(--color-secondary)' }}>Propietarios</Link>
                </li>
            </ul>
        </nav>
    );
}
