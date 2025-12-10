import styles from '@/app/page.module.css';

export const metadata = {
    title: 'Sobre Nosotros | Luxury Estate',
    description: 'Conozca más sobre nuestra agencia inmobiliaria de lujo.',
};

export default function AboutPage() {
    return (
        <div className="container" style={{ padding: '80px 20px' }}>
            <div className={styles.sectionHeader}>
                <h1 className={styles.sectionTitle}>Nuestra Historia</h1>
                <p className={styles.sectionSubtitle}>Más de 20 años redefiniendo el mercado inmobiliario de lujo.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px', alignItems: 'center' }}>
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop"
                        alt="Oficina moderna"
                        style={{ width: '100%', borderRadius: '8px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    />
                </div>
                <div style={{ lineHeight: '1.8', color: '#475569' }}>
                    <p style={{ marginBottom: '20px' }}>
                        Fundada en 2005, <strong>Luxury Estate</strong> nació con la visión de ofrecer un servicio incomparable en el sector de bienes raíces de alta gama. Nos especializamos en conectar a compradores exigentes con propiedades extraordinarias en Miami y Nueva York.
                    </p>
                    <p style={{ marginBottom: '20px' }}>
                        Nuestro equipo de expertos comprende que una propiedad no es solo una estructura, sino un estilo de vida. Por eso, seleccionamos minuciosamente cada inmueble en nuestro portafolio para asegurar que cumpla con los más altos estándares de diseño, ubicación y confort.
                    </p>
                    <p>
                        Ya sea que busque un ático con vistas al Central Park o una mansión frente al mar en South Beach, estamos aquí para hacer realidad sus sueños inmobiliarios.
                    </p>
                </div>
            </div>
        </div>
    );
}
