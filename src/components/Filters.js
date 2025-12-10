'use client';

import { useState } from 'react';
import styles from './Filters.module.css';

export default function Filters({ onSearch, overlap = false }) {
    const [filters, setFilters] = useState({
        location: '',
        type: '',
        minPrice: '',
        maxPrice: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSearch) {
            onSearch(filters);
        }
    };

    return (
        <form className={`${styles.filtersContainer} ${overlap ? styles.overlap : ''}`} onSubmit={handleSubmit}>
            <div className={styles.filterGroup}>
                <label className={styles.label}>Ubicación</label>
                <input
                    type="text"
                    name="location"
                    placeholder="Miami, NY, Buenos Aires..."
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
                    <option value="Condo">Condo</option>
                    <option value="Penthouse">Penthouse</option>
                </select>
            </div>

            <div className={styles.filterGroup}>
                <label className={styles.label}>Precio Mín ($)</label>
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
                <label className={styles.label}>Precio Máx ($)</label>
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
