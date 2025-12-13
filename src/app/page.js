import styles from './page.module.css';
import Filters from '@/components/Filters';
import PropertyCard from '@/components/PropertyCard';
import Link from 'next/link';
import Property from '@/models/Property';
import dbConnect from '@/lib/db';
import { Suspense } from 'react';

export const revalidate = 60; // ISR: Revalidate every 60 seconds

async function getFeaturedProperties() {
  await dbConnect();
  // Fetch featured or just latest 6
  const properties = await Property.find({}).limit(6).lean();
  return properties.map(p => ({ ...p, _id: p._id.toString(), createdAt: p.createdAt?.toString() }));
}

export default async function Home() {
  const featured = await getFeaturedProperties();

  return (
    <div className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Descubrí tu Próximo Hogar</h1>
          <p className={styles.heroSubtitle}>Propiedades exclusivas en las zonas más cotizadas de Buenos Aires.</p>

          {/* El filtro se superpone aquí solo en HOME */}
          <Suspense fallback={null}>
            <Filters overlap={true} />
          </Suspense>
        </div>
      </section>

      {/* Propiedades Destacadas */}
      <section className={`${styles.section} container`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Propiedades Destacadas</h2>
          <p className={styles.sectionSubtitle}>Una selección exclusiva de las residencias más prestigiosas disponibles actualmente.</p>
        </div>

        <div className={styles.grid}>
          {featured.map(prop => (
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
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center', maxWidth: '300px' }}>
              <h3>Trayectoria</h3>
              <p>Desde 2016 liderando el mercado con integridad y resultados comprobables.</p>
            </div>
            <div style={{ textAlign: 'center', maxWidth: '300px' }}>
              <h3>Seguridad</h3>
              <p>Asesoramiento legal y notarial completo para operaciones transparentes.</p>
            </div>
            <div style={{ textAlign: 'center', maxWidth: '300px' }}>
              <h3>Exclusividad</h3>
              <p>Acceso off-market a las propiedades más distinguidas.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
