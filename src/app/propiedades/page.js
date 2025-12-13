import styles from '@/app/page.module.css';
import Filters from '@/components/Filters';
import PropertyCard from '@/components/PropertyCard';
import Property from '@/models/Property';
import dbConnect from '@/lib/db';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

export const metadata = {
    title: 'Catálogo de Propiedades | Luxury Estate',
    description: 'Explore nuestro catálogo completo de propiedades exclusivas en Argentina.',
};

// Helper to build query
async function getProperties(searchParams) {
    await dbConnect();
    const query = {};

    // Await searchParams before accessing properties (Next 15+)
    const { location, type, minPrice, maxPrice } = await searchParams;

    if (location) {
        query.$or = [
            { 'location.city': { $regex: location, $options: 'i' } },
            { 'location.address': { $regex: location, $options: 'i' } },
            { title: { $regex: location, $options: 'i' } }
        ];
    }

    if (type) {
        query.type = type;
    }

    if (minPrice || maxPrice) {
        query.price = {};
        if (minPrice) query.price.$gte = Number(minPrice);
        if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    const properties = await Property.find(query).lean();
    // Serialization friendly
    return properties.map(p => ({
        ...p,
        _id: p._id.toString(),
        createdAt: p.createdAt?.toString()
    }));
}

export default async function PropertiesPage({ searchParams }) {
    const filteredProperties = await getProperties(searchParams);

    return (
        <div className="container" style={{ padding: '40px 20px', paddingTop: '120px' }}>
            <div className={styles.sectionHeader}>
                <h1 className={styles.sectionTitle}>Nuestras Propiedades</h1>
            </div>

            {/* Filtros */}
            <div style={{ marginBottom: '40px' }}>
                <Suspense fallback={<div>Cargando filtros...</div>}>
                    <Filters />
                </Suspense>
            </div>

            {filteredProperties.length > 0 ? (
                <div className={styles.grid}>
                    {filteredProperties.map(prop => (
                        <PropertyCard key={prop._id} property={prop} />
                    ))}
                </div>
            ) : (
                <div className={styles.noResults}>
                    <p>No se encontraron propiedades que coincidan con tu búsqueda.</p>
                </div>
            )}
        </div>
    );
}
