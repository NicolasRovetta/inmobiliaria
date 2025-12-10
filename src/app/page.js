import styles from './page.module.css';
import Filters from '@/components/Filters';
import PropertyCard from '@/components/PropertyCard';
import Link from 'next/link';

// Datos de ejemplo para el esqueleto (fake data)
const FEATURED_PROPERTIES = [
  {
    _id: '1',
    title: 'Penthouse Exclusivo en Brickell',
    price: 3500000,
    location: { city: 'Miami', state: 'FL', address: '123 Brickell Ave' },
    features: { bedrooms: 4, bathrooms: 4.5, area: 350 },
    images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop'],
    status: 'For Sale',
    type: 'Penthouse'
  },
  {
    _id: '2',
    title: 'Moderno Apartamento en Manhattan',
    price: 2100000,
    location: { city: 'New York', state: 'NY', address: '456 Park Avenue' },
    features: { bedrooms: 2, bathrooms: 2, area: 120 },
    images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop'],
    status: 'For Sale',
    type: 'Apartment'
  },
  {
    _id: '3',
    title: 'Villa de Lujo frente al Mar',
    price: 5800000,
    location: { city: 'Miami Beach', state: 'FL', address: '789 Ocean Dr' },
    features: { bedrooms: 6, bathrooms: 7, area: 600 },
    images: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop'],
    status: 'Reserved',
    type: 'House'
  }
];

export default function Home() {
  return (
    <div className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Encuentre su Hogar de Ensueño</h1>
          <p className={styles.heroSubtitle}>Propiedades exclusivas en las mejores ubicaciones de Miami y Nueva York.</p>

          {/* El filtro se superpone aquí solo en HOME */}
          <Filters overlap={true} />
        </div>
      </section>

      {/* Propiedades Destacadas */}
      <section className={`${styles.section} container`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Propiedades Destacadas</h2>
          <p className={styles.sectionSubtitle}>Una selección curada de las residencias más prestigiosas disponibles actualmente.</p>
        </div>

        <div className={styles.grid}>
          {FEATURED_PROPERTIES.map(prop => (
            <PropertyCard key={prop._id} property={prop} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link href="/propiedades" className="btn btn-primary">
            Ver Todas las Propiedades
          </Link>
        </div>
      </section>

      {/* Sección informativa o CTA */}
      <section className={styles.section} style={{ backgroundColor: '#f1f5f9' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>¿Por qué elegirnos?</h2>
            <p className={styles.sectionSubtitle}>Experiencia premium, atención personalizada y acceso exclusivo.</p>
          </div>
          {/* Aquí irían iconos o info adicional */}
        </div>
      </section>
    </div>
  );
}
