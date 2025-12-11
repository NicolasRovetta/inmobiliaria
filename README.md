# 🏰 Luxury Estate - Plataforma Inmobiliaria Premium

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-Leaf_Green?style=for-the-badge&logo=mongodb)
![Mongoose](https://img.shields.io/badge/Mongoose-ODM-red?style=for-the-badge)

Una plataforma moderna, escalable y visualmente impactante diseñada para el mercado inmobiliario de lujo en Argentina. Este proyecto ofrece una experiencia de usuario fluida tanto para clientes como para administradores.

---

## 🚀 Características Principales

*   **Diseño Responsivo & Premium**: Interfaz adaptable a móviles y escritorio con una estética minimalista y elegante.
*   **Búsqueda Avanzada**: Filtros dinámicos por ubicación, tipo de propiedad y rango de precios.
*   **Catálogo Detallado**: Tarjetas de propiedades con galería de imágenes, características y estado (Venta, Alquiler, Reservado).
*   **Localización Argentina**: Adaptado con ubicaciones reales (CABA, Nordelta, Mendoza, etc.) y términos locales.
*   **Panel de Administración**: Gestión de propietarios y propiedades (en desarrollo).
*   **SEO Optimizado**: Estructura costruida sobre Next.js 15 App Router para máxima visibilidad.

## 🛠️ Stack Tecnológico

Este proyecto ha sido construido utilizando las mejores prácticas y tecnologías modernas:

### Frontend
*   **Next.js 15 (App Router)**: El framework de React para producción.
*   **React 19**: Biblioteca para construir interfaces de usuario interactivas.
*   **CSS Modules**: Estilos encapsulados para un mantenimiento sencillo y sin conflictos.
*   **React Icons**: Colección de iconos ligeros y populares.

### Backend & Datos
*   **MongoDB**: Base de datos NoSQL para un esquema flexible de propiedades.
*   **Mongoose**: Modelado de objetos elegante para Node.js.
*   **Server Actions**: Lógica de servidor integrada directamente en los componentes de Next.js.

---

## 📦 Instalación y Configuración

Sigue estos pasos para levantar el proyecto en tu entorno local:

1.  **Clonar el repositorio**
    ```bash
    git clone https://github.com/tu-usuario/luxury-estate.git
    cd luxury-estate
    ```

2.  **Instalar dependencias**
    ```bash
    npm install
    # o
    pnpm install
    ```

3.  **Configurar Variables de Entorno**
    Crea un archivo `.env.local` en la raíz y añade tu string de conexión a MongoDB:
    ```env
    MONGODB_URI=mongodb+srv://<usuario>:<password>@cluster.mongodb.net/inmobiliaria
    ```

4.  **Iniciar el Servidor de Desarrollo**
    ```bash
    npm run dev
    ```
    Visita `http://localhost:3000` para ver la aplicación.

## 📂 Estructura del Proyecto

```
src/
├── app/               # Rutas de la aplicación (App Router)
├── components/        # Componentes UI reutilizables (Navbar, Footer, Cards)
├── data/              # Datos estáticos y mock data
├── lib/               # Utilidades y configuración de DB
├── models/            # Esquemas de Mongoose (Property, Owner)
└── styles/            # Estilos globales y módulos
```

---

<div align="center">
  Desarrollado con ❤️ para transformar la experiencia inmobiliaria digital.
</div>
