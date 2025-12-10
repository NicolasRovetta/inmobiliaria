# Esqueleto Inmobiliaria Next.js + MongoDB

Este proyecto es un esqueleto base para crear sitios inmobiliarios escalables y de alto rendimiento.

## Tecnologías

- **Next.js 15 (App Router)**: Framework de React para producción, optimizado para SEO.
- **MongoDB + Mongoose**: Base de datos NoSQL flexible para propiedades.
- **CSS Modules + Variables**: Estilos vainilla modulares, fáciles de personalizar y sin dependencias pesadas.
- **React Icons**: Iconografía ligera.

## Configuración Inicial

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Configurar Base de Datos**:
   Crea un archivo `.env.local` en la raíz del proyecto y agrega tu conexión a MongoDB:
   ```env
   MONGODB_URI=mongodb+srv://usuario:password@cluster.mongodb.net/inmobiliaria
   ```

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

## Despliegue

Este proyecto está listo para desplegarse en **Vercel** o cualquier hosting compatible con Node.js.
