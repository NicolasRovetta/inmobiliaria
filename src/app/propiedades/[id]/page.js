import Link from 'next/link';
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaCheck, FaArrowLeft } from 'react-icons/fa';

// Mock function para simular fetch de datos
async function getProperty(id) {
    // Aquí iría el fetch a la DB: await Property.findById(id);
    return {
        _id: id,
        title: 'Penthouse Exclusivo en Brickell',
        description: 'Experimente el pináculo de la vida de lujo en este impresionante penthouse. Con vistas panorámicas de la bahía y el horizonte de la ciudad, esta residencia ofrece acabados de primera calidad, techos altos y una amplia terraza privada. El edificio cuenta con servicios de conserjería 24/7, spa, gimnasio y piscina infinita.',
        price: 3500000,
        location: { city: 'Miami', state: 'FL', address: '123 Brickell Ave' },
        features: { bedrooms: 4, bathrooms: 4.5, area: 350 },
        amenities: ['Piscina Privada', 'Seguridad 24/7', 'Gimnasio', 'Vista al Mar', 'Smart Home', 'Spa'],
        images: [
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop'
        ],
        status: 'For Sale',
        type: 'Penthouse'
    };
}

export async function generateMetadata({ params }) {
    const property = await getProperty(params.id);
    return {
        title: `${property.title} | Luxury Estate`,
        description: property.description.substring(0, 160)
    };
}

export default async function PropertyDetailPage({ params }) {
    const property = await getProperty(params.id);

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
                        {property.amenities.map((item, idx) => (
                            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{ color: 'var(--color-success)' }}><FaCheck /></div>
                                {item}
                            </div>
                        ))}
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
