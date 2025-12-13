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
                <p className={styles.sectionSubtitle}>Desde 2016 construyendo confianza en el mercado inmobiliario.</p>
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
                        Fundada en 2016, <strong>Luxury Estate</strong> abrió sus puertas con el objetivo de elevar el estándar del servicio inmobiliario. Lo que comenzó como un proyecto fundado en la pasión y el compromiso, hoy se consolida como una firma referente, combinando la calidez del trato personalizado con una visión de excelencia y profesionalismo.
                    </p>
                    <p style={{ marginBottom: '20px' }}>
                        Entendemos la importancia de cada decisión inmobiliaria en nuestro país. Por eso, nuestro enfoque se basa en la transparencia, el asesoramiento integral y un conocimiento profundo del mercado local. No solo gestionamos propiedades; acompañamos proyectos de vida, inversiones y nuevos comienzos con la seriedad que nos caracteriza.
                    </p>
                    <p>
                        Ya sea que busques tu próximo hogar, una oportunidad de inversión estratégica o ese espacio soñado para tu familia, estamos aquí para brindarte la seguridad y el respaldo que merecés en cada paso del camino.
                    </p>
                </div>
            </div>
        </div>
    );
}
