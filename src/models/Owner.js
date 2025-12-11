import mongoose from 'mongoose';

const OwnerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'El usuario es obligatorio'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
    },
    // En una app real, la password debería estar hasheada (bcrypt).
    // Para este esqueleto simple, la guardaremos en texto plano o hash simple si posible,
    // pero mantendremos la simplicidad según lo solicitado.
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.models.Owner || mongoose.model('Owner', OwnerSchema);
