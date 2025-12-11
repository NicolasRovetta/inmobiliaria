import styles from '@/app/page.module.css';
import Filters from '@/components/Filters';
import PropertyCard from '@/components/PropertyCard';
import { PROPERTIES } from '@/data/properties';

export const metadata = {
    title: 'Catálogo de Propiedades | Luxury Estate',
    description: 'Explore nuestro catálogo completo de propiedades exclusivas en Argentina.',
};

export default function PropertiesPage() {
    return (
        <div className="container" style={{ padding: '40px 20px', paddingTop: '120px' }}>
            <div className={styles.sectionHeader}>
                <h1 className={styles.sectionTitle}>Nuestras Propiedades</h1>
            </div>

            {/* Filtros */}
            <div style={{ marginBottom: '40px' }}>
                <Filters />
            </div>

            <div className={styles.grid}>
                {PROPERTIES.map(prop => (
                    <PropertyCard key={prop._id} property={prop} />
                ))}
            </div>
        </div>
    );
}
