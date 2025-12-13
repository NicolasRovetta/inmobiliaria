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

        const titleToFind = "Casa con Viñedo en Mendoza";
        const newImage = "/casa-vinedo-mendoza.jpg";

        // Find the property
        const property = await Property.findOne({ title: titleToFind });

        if (!property) {
            console.error(`❌ No se encontró la propiedad con título: "${titleToFind}"`);
            // Fallback search if title differs slightly
            console.log('Buscando coincidencias parciales...');
            const fallback = await Property.findOne({ title: { $regex: "Viñedo", $options: 'i' } });
            if (fallback) {
                console.log(`⚠️ Encontrada alternativa: "${fallback.title}". Actualizando esa.`);
                await Property.updateOne(
                    { _id: fallback._id },
                    { $set: { "images.0": newImage } }
                );
                console.log(`✅ Imagen actualizada correctamente a: ${newImage}`);
                return;
            }

            process.exit(1);
        }

        console.log(`🏠 Propiedad encontrada: ${property.title}`);

        // Update with UpdateOne so we don't need to fetch the whole doc or deal with validation
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
