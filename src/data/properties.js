export const PROPERTIES = [
    {
        _id: '1',
        title: 'Penthouse Exclusivo en Puerto Madero',
        price: 3500000,
        location: { city: 'Buenos Aires', state: 'CABA', address: 'Alicia Moreau de Justo 1200' },
        features: { bedrooms: 4, bathrooms: 4, area: 350 },
        images: [
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800&auto=format&fit=crop'
        ],
        status: 'For Sale',
        type: 'Penthouse'
    },
    {
        _id: '2',
        title: 'Departamento Moderno en Palermo',
        price: 210000,
        location: { city: 'Buenos Aires', state: 'CABA', address: 'Humboldt 1500' },
        features: { bedrooms: 2, bathrooms: 2, area: 85 },
        images: [
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop'
        ],
        status: 'For Sale',
        type: 'Apartment'
    },
    {
        _id: '3',
        title: 'Casa de Lujo en Nordelta',
        price: 580000,
        location: { city: 'Tigre', state: 'BA', address: 'Barrio El Golf' },
        features: { bedrooms: 5, bathrooms: 5, area: 600 },
        images: [
            'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop'
        ],
        status: 'Reserved',
        type: 'House'
    },
    {
        _id: '4',
        title: 'Semipiso en Recoleta',
        price: 450000,
        location: { city: 'Buenos Aires', state: 'CABA', address: 'Av. Alvear 1800' },
        features: { bedrooms: 3, bathrooms: 2, area: 150 },
        images: [
            'https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop'
        ],
        status: 'For Sale',
        type: 'Apartment'
    },
    {
        _id: '5',
        title: 'Casa Quinta en Pilar',
        price: 320000,
        location: { city: 'Pilar', state: 'BA', address: 'Km 50 Panamericana' },
        features: { bedrooms: 4, bathrooms: 3, area: 280 },
        images: [
            'https://images.unsplash.com/photo-1600596542815-e32cb7156944?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop'
        ],
        status: 'For Sale',
        type: 'House'
    },
    {
        _id: '6',
        title: 'Loft Industrial en Rosario',
        price: 180000,
        location: { city: 'Rosario', state: 'SF', address: 'Puerto Norte' },
        features: { bedrooms: 1, bathrooms: 1, area: 90 },
        images: [
            'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595246140625-573b715d11f3?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=800&auto=format&fit=crop'
        ],
        status: 'For Rent',
        type: 'Apartment'
    },
    {
        _id: '7',
        title: 'Departamento Céntrico en Córdoba',
        price: 120000,
        location: { city: 'Córdoba', state: 'CBA', address: 'Av. Hipólito Yrigoyen 400' },
        features: { bedrooms: 2, bathrooms: 1, area: 70 },
        images: [
            'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop'
        ],
        status: 'For Sale',
        type: 'Apartment'
    },
    {
        _id: '8',
        title: 'Mansión en San Isidro',
        price: 1200000,
        location: { city: 'San Isidro', state: 'BA', address: 'Calle de las Lomas' },
        features: { bedrooms: 6, bathrooms: 6, area: 800 },
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=800&auto=format&fit=crop'
        ],
        status: 'For Sale',
        type: 'House'
    },
    {
        _id: '9',
        title: 'Casa con Viñedo en Mendoza',
        price: 850000,
        location: { city: 'Mendoza', state: 'MDZ', address: 'Valle de Uco' },
        features: { bedrooms: 3, bathrooms: 3, area: 400 },
        images: [
            'https://images.unsplash.com/photo-1562601579-599a51702eeb?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800&auto=format&fit=crop'
        ],
        status: 'For Sale',
        type: 'House'
    },
    {
        _id: '10',
        title: 'Departamento frente al Mar en Mar del Plata',
        price: 250000,
        location: { city: 'Mar del Plata', state: 'BA', address: 'Bv. Marítimo' },
        features: { bedrooms: 3, bathrooms: 2, area: 110 },
        images: [
            'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop'
        ],
        status: 'For Rent',
        type: 'Apartment'
    },
    {
        _id: '11',
        title: 'Oficina Premium en Microcentro',
        price: 3000,
        location: { city: 'Buenos Aires', state: 'CABA', address: 'Av. Corrientes 500' },
        features: { bedrooms: 0, bathrooms: 2, area: 120 },
        images: [
            'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=800&auto=format&fit=crop'
        ],
        status: 'For Rent',
        type: 'Commercial'
    },
    {
        _id: '12',
        title: 'PH Reciclado en Colegiales',
        price: 195000,
        location: { city: 'Buenos Aires', state: 'CABA', address: 'Conde 2000' },
        features: { bedrooms: 2, bathrooms: 1, area: 95 },
        images: [
            'https://images.unsplash.com/photo-1584622050111-993d42b59edd?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop'
        ],
        status: 'For Sale',
        type: 'Apartment'
    },
    {
        _id: '13',
        title: 'Casa de Campo en Areco',
        price: 400000,
        location: { city: 'San Antonio de Areco', state: 'BA', address: 'Ruta 8' },
        features: { bedrooms: 4, bathrooms: 3, area: 300 },
        images: [
            'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=800&auto=format&fit=crop'
        ],
        status: 'For Sale',
        type: 'House'
    },
    {
        _id: '14',
        title: 'Monoambiente en Belgrano',
        price: 95000,
        location: { city: 'Buenos Aires', state: 'CABA', address: 'Cabildo 2500' },
        features: { bedrooms: 1, bathrooms: 1, area: 35 },
        images: [
            'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595246140625-573b715d11f3?q=80&w=800&auto=format&fit=crop'
        ],
        status: 'For Sale',
        type: 'Apartment'
    },
    {
        _id: '15',
        title: 'Torre de Lujo en Vicente López',
        price: 650000,
        location: { city: 'Vicente López', state: 'BA', address: 'Av. del Libertador 100' },
        features: { bedrooms: 3, bathrooms: 3, area: 180 },
        images: [
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=800&auto=format&fit=crop'
        ],
        status: 'For Sale',
        type: 'Apartment'
    },
    {
        _id: '16',
        title: 'Terreno en Barrio Cerrado',
        price: 150000,
        location: { city: 'Canning', state: 'BA', address: 'Ruta 52' },
        features: { bedrooms: 0, bathrooms: 0, area: 1000 },
        images: [
            'https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop'
        ],
        status: 'For Sale',
        type: 'Land'
    },
    {
        _id: '17',
        title: 'Local Comercial en Palermo Soho',
        price: 5000,
        location: { city: 'Buenos Aires', state: 'CABA', address: 'Gurruchaga 1600' },
        features: { bedrooms: 0, bathrooms: 1, area: 60 },
        images: [
            'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=800&auto=format&fit=crop'
        ],
        status: 'For Rent',
        type: 'Commercial'
    },
    {
        _id: '18',
        title: 'Chalet Clásico en Mar del Plata',
        price: 280000,
        location: { city: 'Mar del Plata', state: 'BA', address: 'Los Troncos' },
        features: { bedrooms: 4, bathrooms: 3, area: 220 },
        images: [
            'https://images.unsplash.com/photo-1605276378663-177b68623053?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=800&auto=format&fit=crop'
        ],
        status: 'For Sale',
        type: 'House'
    }
];
