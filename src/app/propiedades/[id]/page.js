import Link from 'next/link';
import Property from '@/models/Property';
import dbConnect from '@/lib/db';
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaCheck, FaArrowLeft } from 'react-icons/fa';

// Mock function para simular fetch de datos
async function getProperty(id) {
    await dbConnect();
    const property = await Property.findById(id).lean();
    if (!property) return null;

    // Convert _id and dates to string to avoid serialization issues
    property._id = property._id.toString();
    property.createdAt = property.createdAt?.toString();
    return property;
}

export async function generateMetadata({ params }) {
    const property = await getProperty(params.id);
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
        <div className="container" style={{ padding: '40px 20px', paddingTop: '100px' }}>
            <Link href="/propiedades" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px', color: '#64748b' }}>
                <FaArrowLeft /> Volver al catálogo
            </Link>

            {/* Galería Principal */}
            <div style={{ marginBottom: '40px', borderRadius: '12px', overflow: 'hidden', height: '500px' }}>
                <img
                    src={property.images[0]}
                    alt={property.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
                {/* Columna Principal */}
                <div>
                    <div style={{ marginBottom: '20px' }}>
                        <span style={{
                            background: 'var(--color-primary)',
                            color: 'white',
                            padding: '5px 12px',
                            borderRadius: '4px',
                            fontSize: '0.9rem',
                            textTransform: 'uppercase'
                        }}>
                            {property.type}
                        </span>
                        <span style={{
                            background: property.status === 'Reserved' ? '#f59e0b' : property.status === 'Sold' ? '#ef4444' : property.status === 'Rented' ? '#ef4444' : '#10b981',
                            color: 'white',
                            padding: '5px 12px',
                            borderRadius: '4px',
                            fontSize: '0.9rem',
                            textTransform: 'uppercase',
                            marginLeft: '10px'
                        }}>
                            {statusMap[property.status] || property.status}
                        </span>
                        <h1 style={{ fontSize: '2.5rem', marginTop: '10px', color: 'var(--color-primary)' }}>{property.title}</h1>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#64748b', marginTop: '5px' }}>
                            <FaMapMarkerAlt /> {property.location.address}, {property.location.city}, {property.location.state}
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '30px', padding: '20px 0', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', marginBottom: '30px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem' }}>
                            <FaBed size={24} color="var(--color-secondary)" />
                            <strong>{property.features.bedrooms}</strong> Habitaciones
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem' }}>
                            <FaBath size={24} color="var(--color-secondary)" />
                            <strong>{property.features.bathrooms}</strong> Baños
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem' }}>
                            <FaRulerCombined size={24} color="var(--color-secondary)" />
                            <strong>{property.features.area}</strong> m²
                        </div>
                    </div>

                    <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Descripción</h2>
                    <p style={{ lineHeight: '1.8', color: '#475569', marginBottom: '30px' }}>{property.description}</p>

                    <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Amenidades</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
                        {property.amenities && property.amenities.length > 0 ? property.amenities.map((item, idx) => (
                            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{ color: 'var(--color-success)' }}><FaCheck /></div>
                                {item}
                            </div>
                        )) : <p>No specific amenities listed.</p>}
                    </div>
                </div>

                {/* Sidebar / Contacto */}
                <div>
                    <div style={{
                        position: 'sticky',
                        top: '100px',
                        background: 'white',
                        padding: '30px',
                        borderRadius: '8px',
                        boxShadow: 'var(--shadow-lg)',
                        border: '1px solid #e2e8f0'
                    }}>
                        <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '20px' }}>
                            ${property.price.toLocaleString()}
                        </div>

                        <h3 style={{ marginBottom: '15px' }}>¿Interesado?</h3>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <input type="text" placeholder="Nombre" className="input" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
                            <input type="email" placeholder="Email" className="input" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
                            <input type="tel" placeholder="Teléfono" className="input" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
                            <textarea placeholder="Mensaje" rows="3" className="input" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}></textarea>
                            <button className="btn btn-primary" style={{ width: '100%' }}>Consultar Información</button>
                            <button className="btn btn-outline" style={{ width: '100%' }}>Programar Visita</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
