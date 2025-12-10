import mongoose from 'mongoose';

// Definición del esquema de Propiedad
const PropertySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'El título es obligatorio'],
        trim: true,
        maxlength: [100, 'El título no puede tener más de 100 caracteres']
    },
    description: {
        type: String,
        required: [true, 'La descripción es obligatoria']
    },
    price: {
        type: Number,
        required: [true, 'El precio es obligatorio']
    },
    currency: {
        type: String,
        enum: ['USD', 'EUR', 'ARS'],
        default: 'USD'
    },
    location: {
        address: String,
        city: String,
        state: String,
        zip: String,
        country: String
    },
    type: {
        type: String,
        enum: ['House', 'Apartment', 'Condo', 'Penthouse', 'Land', 'Commercial'],
        default: 'Apartment'
    },
    status: {
        type: String,
        enum: ['For Sale', 'For Rent', 'Reserved', 'Sold'],
        default: 'For Sale'
    },
    features: {
        bedrooms: Number,
        bathrooms: Number,
        area: Number, // pies cuadrados o metros cuadrados
        parking: Boolean,
        pool: Boolean,
        wifi: Boolean
        // Se pueden agregar más características dinámicamente si se cambia este esquema a algo más flexible como Map
    },
    images: [String], // Array de URLs de imágenes
    featured: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Evitar recompilar el modelo si ya existe
export default mongoose.models.Property || mongoose.model('Property', PropertySchema);
