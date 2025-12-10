import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    // En producción deberíamos lanzar un error, pero para desarrollo local vamos a permitirlo
    // O podemos usar una string local por defecto si no hay variable de entorno
    // throw new Error('Por favor define la variable MONGODB_URI en .env.local');
    console.warn('Advertencia: MONGODB_URI no definida. La base de datos no se conectará correctamente.');
}

/**
 * Global es usado aquí para mantener una conexión en caché a través de re-cargas en caliente
 * en desarrollo. Esto previene que se creen conexiones múltiples.
 */
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        // Si no hay URI, retornamos null o lanzamos error. 
        // Para este esqueleto, asumiremos que se configurará.
        if (!MONGODB_URI) return null;

        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            return mongoose;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn;
}

export default dbConnect;
