'use client';

import { useState, useEffect } from 'react'; // Added useEffect
import { useRouter, useSearchParams } from 'next/navigation'; // Import hooks
import styles from './Filters.module.css';

export default function Filters({ overlap = false }) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [filters, setFilters] = useState({
        location: '',
        type: '',
        minPrice: '',
        maxPrice: ''
    });

    // Initialize filters from URL params on mount
    useEffect(() => {
        setFilters({
            location: searchParams.get('location') || '',
            type: searchParams.get('type') || '',
            minPrice: searchParams.get('minPrice') || '',
            maxPrice: searchParams.get('maxPrice') || ''
        });
    }, [searchParams]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };



    const handleSubmit = (e) => {
        e.preventDefault();

        // Build query string
        const params = new URLSearchParams();
        if (filters.location) params.set('location', filters.location);
        if (filters.type) params.set('type', filters.type);
        if (filters.minPrice) params.set('minPrice', filters.minPrice);
        if (filters.maxPrice) params.set('maxPrice', filters.maxPrice);

        const queryString = params.toString();

        // If we are not on the properties page, redirect there
        if (!window.location.href.includes('/propiedades')) {
            router.push(`/propiedades?${queryString}`);
        } else {
            // If we are already there, just push the params
            router.push(`?${queryString}`);
        }
    };

    return (
        <form className={`${styles.filtersContainer} ${overlap ? styles.overlap : ''}`} onSubmit={handleSubmit}>
            <div className={styles.filterGroup}>
                <label className={styles.label}>Ubicación</label>
                <input
                    type="text"
                    name="location"
                    placeholder="Palermo, Recoleta, Nordelta..."
                    className={styles.input}
                    value={filters.location}
                    onChange={handleChange}
                />
            </div>

            <div className={styles.filterGroup}>
                <label className={styles.label}>Tipo de Propiedad</label>
                <select name="type" className={styles.select} value={filters.type} onChange={handleChange}>
                    <option value="">Todas</option>
                    <option value="House">Casa</option>
                    <option value="Apartment">Departamento</option>
                    <option value="Condo">PH</option>
                    <option value="Penthouse">Penthouse</option>
                    <option value="Land">Terreno</option>
                    <option value="Commercial">Local / Oficina</option>
                </select>
            </div>

            <div className={styles.filterGroup}>
                <label className={styles.label}>Precio Mín (USD)</label>
                <input
                    type="number"
                    name="minPrice"
                    placeholder="0"
                    className={styles.input}
                    value={filters.minPrice}
                    onChange={handleChange}
                />
            </div>

            <div className={styles.filterGroup}>
                <label className={styles.label}>Precio Máx (USD)</label>
                <input
                    type="number"
                    name="maxPrice"
                    placeholder="Sin límite"
                    className={styles.input}
                    value={filters.maxPrice}
                    onChange={handleChange}
                />
            </div>

            <button type="submit" className={styles.searchBtn}>
                Buscar
            </button>
        </form>
    );
}
