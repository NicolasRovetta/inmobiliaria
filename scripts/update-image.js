require('dotenv').config();
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error('❌ Error: MONGODB_URI no está definida en el archivo .env');
    process.exit(1);
}

// Simple definition to update
const PropertySchema = new mongoose.Schema({}, { strict: false });
const Property = mongoose.models.Property || mongoose.model('Property', PropertySchema);

async function updateImage() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('✅ Conectado a MongoDB');

        const titleToFind = "Casa Quinta en Pilar";
        const newImage = "/casa-quinta-pilar.jpg";

        // Find the property
        const property = await Property.findOne({ title: titleToFind });

        if (!property) {
            console.error(`❌ No se encontró la propiedad con título: "${titleToFind}"`);
            console.log('Intenta verificar el título exacto en tu base de datos.');
            process.exit(1);
        }

        console.log(`🏠 Propiedad encontrada: ${property.title}`);
        console.log(`📸 Imágenes actuales: ${property.images ? property.images.length : 0}`);

        // Update the first image
        if (!property.images) property.images = [];

        // Insert at beginning or replace first? Let's replace first if exists, or push.
        // User said "in the portada", usually first image.
        if (property.images.length > 0) {
            property.images[0] = newImage;
        } else {
            property.images.push(newImage);
        }

        // We need to verify if the schema is strict. Using UpdateOne is safer for flexibility.
        await Property.updateOne(
            { _id: property._id },
            { $set: { "images.0": newImage } } // Set the 0-th element directly
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
