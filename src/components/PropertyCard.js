'use client';

import styles from './PropertyCard.module.css';
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function PropertyCard({ property }) {
    // Valores por defecto para fallback (esqueleto visual)
    const {
        _id = '#',
        title = 'Propiedad Exclusiva',
        price = 0,
        location = { city: 'Buenos Aires', state: 'CABA' },
        features = { bedrooms: 2, bathrooms: 1, area: 60 },
        images = ['https://via.placeholder.com/400x300?text=Propiedad'], // Placeholder
        status = 'For Sale',
        type = 'Apartment'
    } = property || {};

    // Formato de precio
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(price);

    // Mapeo de estados y tipos para mostrar en español
    const statusMap = {
        'For Sale': 'En Venta',
        'For Rent': 'Alquiler',
        'Reserved': 'Reservado',
        'Sold': 'Vendido',
        'Rented': 'Alquilado'
    };

    const typeMap = {
        'House': 'Casa',
        'Apartment': 'Depto',
        'Condo': 'Condo',
        'Penthouse': 'Penthouse',
        'Land': 'Terreno',
        'Commercial': 'Local'
    };

    return (
        <Link href={`/propiedades/${_id}`}>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <span className={`${styles.statusBadge} ${status === 'Reserved' ? styles.secondaryBadge : ''}`}>
                        {statusMap[status] || status}
                    </span>
                    <img
                        src={images && images.length > 0 ? images[0] : 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop'}
                        alt={title}
                        className={styles.image}
                        loading="lazy"
                        onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop'; }}
                    />
                </div>

                <div className={styles.content}>
                    <div className={styles.price}>{formattedPrice}</div>
                    <h3 className={styles.title}>{title}</h3>
                    <div className={styles.location}>
                        <FaMapMarkerAlt />
                        {location.city}, {location.state}
                    </div>

                    <div className={styles.features}>
                        <div className={styles.feature}>
                            <FaBed /> <span>{features.bedrooms} Dorm.</span>
                        </div>
                        <div className={styles.feature}>
                            <FaBath /> <span>{features.bathrooms} Baños</span>
                        </div>
                        <div className={styles.feature}>
                            <FaRulerCombined /> <span>{features.area} m²</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
