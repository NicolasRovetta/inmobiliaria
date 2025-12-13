import Link from 'next/link';
import Property from '@/models/Property';
import dbConnect from '@/lib/db';
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaCheck, FaArrowLeft } from 'react-icons/fa';
import styles from './page.module.css';

// Mock function para simular fetch de datos
async function getProperty(id) {
    if (!id) return null;
    await dbConnect();
    // Validate valid Mongo ID to avoid casting error crash
    if (!id.match(/^[0-9a-fA-F]{24}$/)) return null;

    const property = await Property.findById(id).lean();
    if (!property) return null;

    // Convert _id and dates to string to avoid serialization issues
    property._id = property._id.toString();
    property.createdAt = property.createdAt?.toString();
    return property;
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    const property = await getProperty(id);

    if (!property) {
        return {
            title: 'Propiedad no encontrada | Luxury Estate'
        };
    }

    return {
        title: `${property.title} | Luxury Estate`,
        description: property.description.substring(0, 160)
    };
}

export default async function PropertyDetailPage({ params }) {
    const { id } = await params;
    const property = await getProperty(id);

    if (!property) {
        return <div className="container" style={{ paddingTop: '100px' }}>Propiedad no encontrada</div>;
    }

    const statusMap = {
        'For Sale': 'En Venta',
        'For Rent': 'Alquiler',
        'Reserved': 'Reservado',
        'Sold': 'Vendido',
        'Rented': 'Alquilado'
    };

    return (
        <div className={styles.container}>
            <Link href="/propiedades" className={styles.backLink}>
                <FaArrowLeft /> Volver al catálogo
            </Link>

            {/* Galería Principal */}
            <div className={styles.imageContainer}>
                <img
                    src={property.images[0]}
                    alt={property.title}
                    className={styles.image}
                />
            </div>

            <div className={styles.grid}>
                {/* Columna Principal */}
                <div>
                    <div>
                        <div className={styles.badges}>
                            <span className={`${styles.badge} ${styles.typeBadge}`}>
                                {property.type}
                            </span>
                            <span className={styles.badge} style={{
                                backgroundColor: property.status === 'Reserved' ? '#f59e0b' : property.status === 'Sold' ? '#ef4444' : property.status === 'Rented' ? '#ef4444' : '#10b981'
                            }}>
                                {statusMap[property.status] || property.status}
                            </span>
                        </div>

                        <h1 className={styles.title}>{property.title}</h1>
                        <div className={styles.location}>
                            <FaMapMarkerAlt /> {property.location.address}, {property.location.city}, {property.location.state}
                        </div>
                    </div>

                    <div className={styles.features}>
                        <div className={styles.feature}>
                            <FaBed size={24} color="var(--color-secondary)" />
                            <span><strong>{property.features.bedrooms}</strong> Habitaciones</span>
                        </div>
                        <div className={styles.feature}>
                            <FaBath size={24} color="var(--color-secondary)" />
                            <span><strong>{property.features.bathrooms}</strong> Baños</span>
                        </div>
                        <div className={styles.feature}>
                            <FaRulerCombined size={24} color="var(--color-secondary)" />
                            <span><strong>{property.features.area}</strong> m²</span>
                        </div>
                    </div>

                    <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--color-primary)' }}>Descripción</h2>
                    <p className={styles.description}>{property.description}</p>

                    <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--color-primary)' }}>Amenidades</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px' }}>
                        {property.amenities && property.amenities.length > 0 ? property.amenities.map((item, idx) => (
                            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{ color: 'var(--color-success)' }}><FaCheck /></div>
                                {item}
                            </div>
                        )) : <p>No hay amenidades específicas listadas.</p>}
                    </div>
                </div>

                {/* Sidebar / Contacto */}
                <div>
                    <div className={styles.sidebar}>
                        <div className={styles.price}>
                            ${property.price.toLocaleString()}
                        </div>

                        <h3 style={{ marginBottom: '15px' }}>¿Interesado?</h3>
                        <form className={styles.form}>
                            <input type="text" placeholder="Nombre" className={styles.input} />
                            <input type="email" placeholder="Email" className={styles.input} />
                            <input type="tel" placeholder="Teléfono" className={styles.input} />
                            <textarea placeholder="Mensaje" rows="3" className={styles.input}></textarea>
                            <button className="btn btn-primary" style={{ width: '100%' }}>Consultar Información</button>
                            <button className="btn btn-outline" style={{ width: '100%' }}>Programar Visita</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
