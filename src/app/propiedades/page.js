import styles from '@/app/page.module.css';
import Filters from '@/components/Filters';
import PropertyCard from '@/components/PropertyCard';

// Reutilizamos datos mock para este esqueleto
// En un caso real, esto vendría de una API o Server Action filtrada
const ALL_PROPERTIES = [
    {
        _id: '1',
        title: 'Penthouse Exclusivo en Brickell',
        price: 3500000,
        location: { city: 'Miami', state: 'FL' },
        features: { bedrooms: 4, bathrooms: 4.5, area: 350 },
        images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop'],
        status: 'For Sale',
        type: 'Penthouse'
    },
    {
        _id: '2',
        title: 'Moderno Apartamento en Manhattan',
        price: 2100000,
        location: { city: 'New York', state: 'NY' },
        features: { bedrooms: 2, bathrooms: 2, area: 120 },
        images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop'],
        status: 'For Sale',
        type: 'Apartment'
    },
    {
        _id: '3',
        title: 'Villa de Lujo frente al Mar',
        price: 5800000,
        location: { city: 'Miami Beach', state: 'FL' },
        features: { bedrooms: 6, bathrooms: 7, area: 600 },
        images: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop'],
        status: 'Reserved',
        type: 'House'
    },
    {
        _id: '4',
        title: 'Loft Industrial en Brooklyn',
        price: 1200000,
        location: { city: 'Brooklyn', state: 'NY' },
        features: { bedrooms: 1, bathrooms: 1, area: 90 },
        images: ['https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=800&auto=format&fit=crop'],
        status: 'For Sale',
        type: 'Apartment'
    }
];

export const metadata = {
    title: 'Catálogo de Propiedades | Luxury Estate',
    description: 'Explore nuestro catálogo completo de propiedades exclusivas.',
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
                {ALL_PROPERTIES.map(prop => (
                    <PropertyCard key={prop._id} property={prop} />
                ))}
            </div>
        </div>
    );
}
