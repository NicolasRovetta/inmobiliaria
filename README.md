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


## 🌟 Solución Tech para Inmobiliarias: Servicios Profesionales

**Llevá tu inmobiliaria al siguiente nivel digital.**

Ofrecemos el servicio de desarrollo de plataformas web a medida, utilizando las tecnologías más avanzadas del mercado (**Next.js**, **React** y **MongoDB**) para garantizar que tu negocio destaque frente a la competencia.

¿Por qué elegir nuestra solución tecnológica?

*   **📱 Diseño 100% Responsivo y Mobile-First:**
    Tu sitio se adaptará perfectamente a cualquier pantalla, desde monitores de escritorio hasta smartphones y tablets. En un mundo donde el 80% de las búsquedas son móviles, garantizamos una experiencia de usuario impecable.

*   **⚡ Velocidad y Rendimiento Superior:**
    Gracias a la tecnología de Next.js y Vercel, entregamos tiempos de carga instantáneos. Un sitio rápido mejora el posicionamiento en Google (SEO) y retiene a más clientes potenciales.

*   **🛠 Autogestión Total (Sin depender de programadores):**
    Incluimos un **Panel de Administración** exclusivo donde podrás:
    *   Subir y editar propiedades en tiempo real.
    *   Gestionar fotos, precios y descripciones.
    *   Actualizar estados (Venta/Alquiler/Reservado) con un clic.

*   **📈 Versatilidad y Escalabilidad:**
    Una base sólida preparada para crecer. Ya sea que tengas 10 o 1000 propiedades, el sistema mantiene su fluidez y potencia.

---

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
