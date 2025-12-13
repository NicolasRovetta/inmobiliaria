require('dotenv').config();
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error('❌ Error: MONGODB_URI no está definida en el archivo .env');
    process.exit(1);
}

const PropertySchema = new mongoose.Schema({}, { strict: false });
const Property = mongoose.models.Property || mongoose.model('Property', PropertySchema);

async function updateImage() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('✅ Conectado a MongoDB');

        const titleToFind = "PH Reciclado en Colegiales";
        const newImage = "/ph-colegiales.jpg";

        const property = await Property.findOne({ title: titleToFind });

        if (!property) {
            console.error(`❌ No se encontró la propiedad con título: "${titleToFind}"`);
            process.exit(1);
        }

        console.log(`🏠 Propiedad encontrada: ${property.title}`);

        await Property.updateOne(
            { _id: property._id },
            { $set: { "images.0": newImage } }
        );

        console.log(`✅ Imagen actualizada correctamente a: ${newImage}`);

    } catch (error) {
        console.error('❌ Error actualizando la base de datos:', error);
    } finally {
        await mongoose.disconnect();
        console.log('👋 Desconectado');
    }
}

updateImage();
