import styles from './PropertyCard.module.css';
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function PropertyCard({ property }) {
    // Valores por defecto para fallback (esqueleto visual)
    const {
        _id = '#',
        title = 'Apartamento de Lujo',
        price = 0,
        location = { city: 'Miami', state: 'FL' },
        features = { bedrooms: 2, bathrooms: 2, area: 120 },
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

    return (
        <Link href={`/propiedades/${_id}`}>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <span className={`${styles.statusBadge} ${status === 'Reserved' ? styles.secondaryBadge : ''}`}>
                        {status === 'For Sale' ? 'En Venta' : status === 'For Rent' ? 'Alquiler' : 'Reservado'}
                    </span>
                    <img
                        src={images[0]}
                        alt={title}
                        className={styles.image}
                        loading="lazy"
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
                            <FaBed /> <span>{features.bedrooms} Hab</span>
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
