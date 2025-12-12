const mongoose = require('mongoose');

require('dotenv').config({ path: '.env' });
const MONGODB_URI = process.env.MONGODB_URI;

const ownerSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Not hashed for this skeleton
});

const Owner = mongoose.models.Owner || mongoose.model('Owner', ownerSchema);

async function checkUsers() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to DB');

        const count = await Owner.countDocuments();
        console.log(`Total users: ${count}`);

        if (count > 0) {
            const users = await Owner.find({});
            console.log('Users found:', users);
        } else {
            console.log('No users found. Creating admin...');
            await Owner.create({ username: 'admin', password: 'admin' });
            console.log('Admin created.');
        }

    } catch (error) {
        console.error('Error:', error);
    } finally {
        await mongoose.disconnect();
    }
}

checkUsers();
