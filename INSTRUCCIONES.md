# Esqueleto Inmobiliaria Next.js + MongoDB

Este proyecto es un esqueleto base para crear sitios inmobiliarios escalables y de alto rendimiento.

## Tecnologías

- **Next.js 15 (App Router)**: Framework de React para producción, optimizado para SEO.
- **MongoDB + Mongoose**: Base de datos NoSQL flexible para propiedades.
- **CSS Modules + Variables**: Estilos vainilla modulares, fáciles de personalizar y sin dependencias pesadas.
- **React Icons**: Iconografía ligera.
- **EmailJS**: Integrado para formularios de contacto sin backend (`@emailjs/browser` ya instalado).

## Configuración Inicial

1. **Instalar dependencias**:
   ```bash
   npm install
   ```
   (Nota: `@emailjs/browser` ya está incluido en package.json)

2. **Configurar Variables**:
   Crea un archivo `.env.local` en la raíz (no lo subas a GitHub) y configura:
   
   **Base de Datos**:
   ```env
   MONGODB_URI=mongodb+srv://usuario:password@cluster.mongodb.net/inmobiliaria
   ```

   **Formulario de Contacto (EmailJS)**:
   Solo necesario al entregar al cliente final.
   
   1. Regístrate en [EmailJS](https://www.emailjs.com/).
   2. Crea un servicio y un template.
   3. Agrega estas claves en `.env.local`:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
   ```
   *El formulario en `/contacto` detectará automáticamente estas variables.*

3. **Ejecutar en Desarrollo**:
   ```bash
   npm run dev
   ```
   Abre http://localhost:3000

## Estructura del Proyecto

- `src/app`: Rutas y páginas (Home, Admin, Propiedades).
- `src/components`: Componentes reutilizables (Navbar, Cards, Filtros).
- `src/lib`: Utilidades (Conexión DB).
- `src/models`: Modelos de datos (Mongoose Schemas).
- `src/app/globals.css`: Variables de diseño (Colores, Fuentes).

## Personalización

- **Colores y Fuentes**: Edita `src/app/globals.css` para cambiar la identidad visual (`--color-primary`, `--color-secondary`).
- **Datos**: El admin panel en `/admin` permite gestionar propiedades. Asegúrate de tener la DB conectada.
- **Redes Sociales**: Para cambiar los enlaces de las redes sociales del pie de página, edita el archivo:
  `src/components/Footer.js` (busca la sección comentada).

## Despliegue

Este proyecto está listo para desplegarse en **Vercel** o cualquier hosting compatible con Node.js.
