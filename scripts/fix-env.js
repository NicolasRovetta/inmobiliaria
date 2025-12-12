const fs = require('fs');
const content = `MONGODB_URI=mongodb+srv://nicorovetta_db_user:r5sCwJZrW%409WL38@cluster0.wn3aza2.mongodb.net/inmobiliaria?retryWrites=true&w=majority&appName=Cluster0`;
fs.writeFileSync('.env', content, 'utf8');
console.log('.env written successfully');
