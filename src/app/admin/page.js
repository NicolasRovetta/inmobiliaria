'use client';

import { useState, useEffect } from 'react';
import styles from './admin.module.css';
import Link from 'next/link';

export default function AdminDashboard() {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);

    // Estado para el formulario de nueva propiedad
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        description: '',
        city: '',
        state: ''
    });

    // Cargar propiedades al iniciar (simulado si falla la API)
    useEffect(() => {
        fetchProperties();
    }, []);

    const fetchProperties = async () => {
        try {
            const res = await fetch('/api/properties');
            const data = await res.json();
            if (data.success) {
                setProperties(data.data);
            } else {
                // Fallback datos fake si no hay DB conectada
                setProperties([
                    { _id: '1', title: 'Ejemplo Penthouse', price: 500000, status: 'For Sale', location: { city: 'Miami' } }
                ]);
            }
        } catch (error) {
            console.error('Error fetching properties', error);
            // Fallback
            setProperties([
                { _id: '1', title: 'Ejemplo Penthouse (Mock)', price: 500000, status: 'For Sale', location: { city: 'Miami' } }
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('¿Está seguro de eliminar esta propiedad?')) return;
        // Lógica de eliminación (llamada a API DELETE)
        alert(`Eliminando propiedad ${id}... (Funcionalidad pendiente de conexión DB)`);
    };

    const handleStatusChange = async (id, currentStatus) => {
        const newStatus = currentStatus === 'Reserved' ? 'For Sale' : 'Reserved';
        // Lógica de actualización (llamada a API PUT)
        alert(`Cambiando estado a ${newStatus}...`);
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div>
                    <h1 className={styles.title}>Panel de Administración</h1>
                    <p style={{ color: '#64748b' }}>Gestiona tu inventario de propiedades.</p>
                </div>
                <button
                    className="btn btn-primary"
                    onClick={() => setShowForm(!showForm)}
                >
                    {showForm ? 'Cancelar' : '+ Nueva Propiedad'}
                </button>
            </header>

            {/* Resumen de Estadísticas */}
            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <span className={styles.statValue}>{properties.length}</span>
                    <span className={styles.statLabel}>Total Propiedades</span>
                </div>
                <div className={styles.statCard}>
                    <span className={styles.statValue}>
                        {properties.filter(p => p.status === 'For Sale').length}
                    </span>
                    <span className={styles.statLabel}>En Venta</span>
                </div>
                <div className={styles.statCard}>
                    <span className={styles.statValue}>
                        {properties.filter(p => p.status === 'Reserved').length}
                    </span>
                    <span className={styles.statLabel}>Reservadas</span>
                </div>
            </div>

            {/* Formulario (Expandible) */}
            {showForm && (
                <div style={{ background: 'white', padding: '20px', marginBottom: '30px', borderRadius: '8px' }}>
                    <h3>Agregar Nueva Propiedad</h3>
                    <p style={{ marginBottom: '10px', fontSize: '0.9rem', color: '#666' }}>
                        Aquí iría el formulario completo conectado a la API POST /api/properties.
                    </p>
                    <form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <input type="text" placeholder="Título" className="input" style={{ padding: '10px', border: '1px solid #ccc' }} />
                        <input type="number" placeholder="Precio" className="input" style={{ padding: '10px', border: '1px solid #ccc' }} />
                        <button type="button" className="btn btn-primary" onClick={() => alert('Guardar simulado')}>Guardar</button>
                    </form>
                </div>
            )}

            {/* Tabla de Propiedades */}
            <div className={styles.tableContainer}>
                {loading ? (
                    <p style={{ padding: '20px' }}>Cargando...</p>
                ) : (
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Precio</th>
                                <th>Ubicación</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {properties.map((property) => (
                                <tr key={property._id}>
                                    <td>{property.title}</td>
                                    <td>${property.price.toLocaleString()}</td>
                                    <td>{property.location?.city || 'N/A'}</td>
                                    <td>
                                        <span
                                            style={{
                                                padding: '4px 8px',
                                                borderRadius: '12px',
                                                fontSize: '0.8rem',
                                                backgroundColor: property.status === 'Reserved' ? '#fef3c7' : '#d1fae5',
                                                color: property.status === 'Reserved' ? '#d97706' : '#059669'
                                            }}
                                        >
                                            {property.status === 'For Sale' ? 'En Venta' : 'Reservado'}
                                        </span>
                                    </td>
                                    <td>
                                        <button className={`${styles.actionBtn} ${styles.editBtn}`}>Editar</button>
                                        <button
                                            className={`${styles.actionBtn} ${styles.statusBtn}`}
                                            onClick={() => handleStatusChange(property._id, property.status)}
                                        >
                                            {property.status === 'Reserved' ? 'Liberar' : 'Reservar'}
                                        </button>
                                        <button
                                            className={`${styles.actionBtn} ${styles.deleteBtn}`}
                                            onClick={() => handleDelete(property._id)}
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {properties.length === 0 && (
                                <tr>
                                    <td colSpan="5" style={{ textAlign: 'center', padding: '30px' }}>
                                        No hay propiedades registradas.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
