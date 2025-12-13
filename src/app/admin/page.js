'use client';

import { useState, useEffect } from 'react';
import styles from './admin.module.css';
import { PROPERTIES } from '@/data/properties';

export default function AdminDashboard() {
    // Auth State
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [authLoading, setAuthLoading] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    // Dashboard State
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [uploading, setUploading] = useState(false);

    const initialFormState = {
        title: '',
        price: '',
        description: '',
        city: '',
        state: '',
        address: '',
        bedrooms: '',
        bathrooms: '',
        area: '',
        type: 'Apartment',
        status: 'For Sale',
        images: [],
        amenities: '' // String separado por comas para facilitar la edición
    };
    const [formData, setFormData] = useState(initialFormState);

    // Check session on mount
    useEffect(() => {
        const storedAuth = localStorage.getItem('isAdmin');
        if (storedAuth === 'true') {
            setIsAuthenticated(true);
            fetchProperties();
        }
        setAuthLoading(false);
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoginError('');

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            const data = await res.json();

            if (data.success) {
                setIsAuthenticated(true);
                localStorage.setItem('isAdmin', 'true');
                fetchProperties();
            } else {
                setLoginError(data.error || 'Error de autenticación');
            }
        } catch (err) {
            setLoginError('Error de conexión');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('isAdmin');
    };

    const fetchProperties = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/properties');
            const data = await res.json();
            if (data.success) {
                setProperties(data.data);
            }
        } catch (error) {
            console.error('Error fetching properties', error);
        } finally {
            setLoading(false);
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setUploading(true);
        const reader = new FileReader();
        reader.onloadend = () => {
            setFormData(prev => ({
                ...prev,
                images: [reader.result]
            }));
            setUploading(false);
        };
        reader.readAsDataURL(file);
    };

    const handleEdit = (property) => {
        setEditingId(property._id);
        setFormData({
            title: property.title,
            price: property.price,
            description: property.description || '',
            city: property.location?.city || '',
            state: property.location?.state || '',
            address: property.location?.address || '',
            bedrooms: property.features?.bedrooms || '',
            bathrooms: property.features?.bathrooms || '',
            area: property.features?.area || '',
            type: property.type,
            status: property.status,
            images: property.images || [],
            amenities: property.amenities ? property.amenities.join(', ') : ''
        });
        setShowForm(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // ... handleDelete ...

    // ... handleStatusChange ...

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Convert amenities string to array
        const amenitiesArray = formData.amenities.split(',').map(item => item.trim()).filter(item => item !== '');

        const payload = {
            title: formData.title,
            description: formData.description || 'Descripción pendiente',
            price: Number(formData.price),
            location: {
                city: formData.city,
                state: formData.state,
                address: formData.address
            },
            features: {
                bedrooms: Number(formData.bedrooms),
                bathrooms: Number(formData.bathrooms),
                area: Number(formData.area)
            },
            type: formData.type,
            status: formData.status,
            images: formData.images,
            amenities: amenitiesArray
        };

        try {
            const url = editingId ? `/api/properties/${editingId}` : '/api/properties';
            const method = editingId ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method: method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const data = await res.json();

            if (data.success) {
                setShowForm(false);
                setFormData(initialFormState);
                setEditingId(null);
                fetchProperties();
                alert(editingId ? 'Propiedad actualizada' : 'Propiedad creada con éxito');
            } else {
                alert('Error: ' + data.error);
            }
        } catch (error) {
            console.error('Error submitting form', error);
            alert('Error al guardar');
        }
    };

    // Función para seedear la DB con datos locales
    const handleSeed = async () => {
        if (!confirm('Esto cargará 18 propiedades de prueba en la base de datos. ¿Continuar?')) return;
        setLoading(true);
        for (const prop of PROPERTIES) {
            const { _id, ...propData } = prop;
            if (!propData.description) propData.description = `${prop.title} - Una excelente oportunidad.`;

            await fetch('/api/properties', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(propData)
            });
        }
        setLoading(false);
        fetchProperties();
        alert('Datos de prueba cargados!');
    };

    // Render Login
    if (!isAuthenticated && !authLoading) {
        return (
            <div className={styles.container} style={{ paddingTop: '120px', minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px' }}>
                    <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#1e293b' }}>Bienvenido</h1>
                    <p style={{ textAlign: 'center', marginBottom: '30px', color: '#64748b' }}>Inicie sesión para administrar</p>

                    <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#64748b' }}>Usuario</label>
                            <input
                                className="input"
                                type="text"
                                style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '6px' }}
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                placeholder="Admin"
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#64748b' }}>Contraseña</label>
                            <input
                                className="input"
                                type="password"
                                style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '6px' }}
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="••••••"
                            />
                        </div>

                        {loginError && <p style={{ color: 'red', fontSize: '0.9rem', textAlign: 'center' }}>{loginError}</p>}

                        <button className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>Ingresar</button>
                    </form>
                    <p style={{ marginTop: '20px', fontSize: '0.8rem', color: '#94a3b8', textAlign: 'center' }}>
                        Credenciales por defecto: admin / admin
                    </p>
                </div>
            </div>
        );
    }

    // Render Dashboard
    return (
        <div className={styles.container} style={{ paddingTop: '100px' }}>
            <header className={styles.header}>
                <div>
                    <h1 className={styles.title}>Panel de Administración</h1>
                    <p style={{ color: '#64748b' }}>Gestiona tu inventario de propiedades.</p>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>

                    <button className="btn btn-secondary" onClick={handleLogout} style={{ border: '1px solid currentColor' }}>
                        Salir
                    </button>

                    {properties.length === 0 && (
                        <button className="btn btn-secondary" onClick={handleSeed}>
                            Cargar Datos de Prueba
                        </button>
                    )}
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            setShowForm(!showForm);
                            setEditingId(null);
                            setFormData(initialFormState);
                        }}
                    >
                        {showForm ? 'Cancelar' : '+ Nueva Propiedad'}
                    </button>
                </div>
            </header>

            {/* Formulario */}
            {showForm && (
                <div style={{ background: 'white', padding: '20px', marginBottom: '30px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <h3 style={{ marginBottom: '20px' }}>{editingId ? 'Editar Propiedad' : 'Agregar Nueva Propiedad'}</h3>
                    <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

                        {/* Datos Básicos */}
                        <div style={{ gridColumn: '1 / -1' }}>
                            <label className={styles.label}>Título</label>
                            <input
                                className="input"
                                value={formData.title}
                                onChange={e => setFormData({ ...formData, title: e.target.value })}
                                required
                            />
                        </div>

                        <div>
                            <label className={styles.label}>Precio (USD)</label>
                            <input
                                type="number"
                                className="input"
                                value={formData.price}
                                onChange={e => setFormData({ ...formData, price: e.target.value })}
                                required
                            />
                        </div>

                        <div>
                            <label className={styles.label}>Tipo</label>
                            <select
                                className="select"
                                style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #e2e8f0' }}
                                value={formData.type}
                                onChange={e => setFormData({ ...formData, type: e.target.value })}
                            >
                                <option value="Apartment">Departamento</option>
                                <option value="House">Casa</option>
                                <option value="Penthouse">Penthouse</option>
                                <option value="Land">Terreno</option>
                                <option value="Commercial">Local/Oficina</option>
                            </select>
                        </div>

                        {/* Ubicación */}
                        <div>
                            <label className={styles.label}>Ciudad</label>
                            <input className="input" value={formData.city} onChange={e => setFormData({ ...formData, city: e.target.value })} />
                        </div>
                        <div>
                            <label className={styles.label}>Dirección</label>
                            <input className="input" value={formData.address} onChange={e => setFormData({ ...formData, address: e.target.value })} />
                        </div>

                        {/* Características */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', gridColumn: '1 / -1' }}>
                            <div>
                                <label className={styles.label}>Dormitorios</label>
                                <input type="number" className="input" value={formData.bedrooms} onChange={e => setFormData({ ...formData, bedrooms: e.target.value })} />
                            </div>
                            <div>
                                <label className={styles.label}>Baños</label>
                                <input type="number" className="input" value={formData.bathrooms} onChange={e => setFormData({ ...formData, bathrooms: e.target.value })} />
                            </div>
                            <div>
                                <label className={styles.label}>Area (m2)</label>
                                <input type="number" className="input" value={formData.area} onChange={e => setFormData({ ...formData, area: e.target.value })} />
                            </div>
                        </div>

                        {/* Amenidades */}
                        <div style={{ gridColumn: '1 / -1' }}>
                            <label className={styles.label}>Amenidades (separadas por coma)</label>
                            <textarea
                                className="input"
                                rows="3"
                                placeholder="Piscina, Gimnasio, Seguridad 24hs, SUM..."
                                value={formData.amenities}
                                onChange={e => setFormData({ ...formData, amenities: e.target.value })}
                            />
                        </div>

                        {/* Imagen */}
                        <div style={{ gridColumn: '1 / -1' }}>
                            <label className={styles.label}>Imagen Principal</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="input"
                            />
                            {uploading && <p>Procesando imagen...</p>}
                            {formData.images[0] && (
                                <img src={formData.images[0]} alt="Preview" style={{ width: '100px', height: '100px', objectFit: 'cover', marginTop: '10px', borderRadius: '4px' }} />
                            )}
                        </div>

                        <div style={{ gridColumn: '1 / -1', marginTop: '10px' }}>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={uploading}>
                                {editingId ? 'Actualizar Propiedad' : 'Guardar Propiedad'}
                            </button>
                        </div>
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
                                    <td>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            {property.images?.[0] && (
                                                <img src={property.images[0]} alt="" style={{ width: '40px', height: '40px', borderRadius: '4px', objectFit: 'cover' }} />
                                            )}
                                            {property.title}
                                        </div>
                                    </td>
                                    <td>{property.price ? `$${property.price.toLocaleString()}` : '-'}</td>
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
                                            {
                                                {
                                                    'For Sale': 'En Venta',
                                                    'For Rent': 'Alquiler',
                                                    'Reserved': 'Reservado',
                                                    'Sold': 'Vendido',
                                                    'Rented': 'Alquilado'
                                                }[property.status] || property.status
                                            }
                                        </span>
                                    </td>
                                    <td>
                                        <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                                            <button
                                                className={`${styles.actionBtn} ${styles.editBtn}`}
                                                onClick={() => handleEdit(property)}
                                            >
                                                Editar
                                            </button>

                                            <select
                                                className={styles.select}
                                                style={{ width: 'auto', padding: '6px', fontSize: '0.9rem' }}
                                                value={property.status}
                                                onChange={(e) => handleStatusChange(property, e.target.value)}
                                            >
                                                <option value="For Sale">En Venta</option>
                                                <option value="For Rent">Alquiler</option>
                                                <option value="Reserved">Reservado</option>
                                                <option value="Sold">Vendido</option>
                                                <option value="Rented">Alquilado</option>
                                            </select>

                                            <button
                                                className={`${styles.actionBtn} ${styles.deleteBtn}`}
                                                onClick={() => handleDelete(property._id)}
                                            >
                                                Eliminar
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {properties.length === 0 && (
                                <tr>
                                    <td colSpan="5" style={{ textAlign: 'center', padding: '30px' }}>
                                        No hay propiedades registradas o no hay conexión a la base de datos..
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
