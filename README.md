# 📱 ITX Shop – Frontend Challenge

Mini-app desarrollada como parte del challenge técnico de ITX. Permite explorar un catálogo de dispositivos móviles, ver sus detalles, seleccionar configuraciones y añadirlos a un carrito persistente.

---

## 🚀 Demo

📁 Repositorio: https://github.com/jicibils/itx-shop

---

## ⚙️ Tecnologías usadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- Context API + localStorage para persistencia
- Testing con [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/)
- Librerías extra: `lodash.debounce`, `canvas-confetti`, `react-hot-toast`, `@heroicons/react`

## Version de Node: 20

## 📂 Estructura del proyecto

```
itx-shop/
├── public/
├── src/
│   ├── assets/           # Imágenes, íconos
│   ├── components/       # UI reutilizable (Header, Card, Selectors, etc.)
│   ├── context/          # Carrito
│   ├── hooks/            # Custom hooks (ej: useCachedProducts)
│   ├── pages/            # PLP y PDP
│   ├── services/         # API externa (Axios)
│   ├── styles/           # Globales (Tailwind)
│   ├── utils/            # Cache con expiración
│   ├── App.jsx
│   ├── main.jsx
├── tests/                # Tests por componente y hook
├── eslint.config.js
├── tailwind.config.js
├── vite.config.js
├── README.md
```

---

## 📦 Scripts disponibles

```bash
npm run dev      # Modo desarrollo
npm run build    # Build de producción
npm run lint     # Linter (ESLint + Tailwind)
npm run test     # Ejecutar tests (Vitest)
```

---

## ✅ Funcionalidades implementadas

- [x] Catálogo de productos con búsqueda en tiempo real
- [x] Página de detalle con selectores de color y almacenamiento
- [x] Carrito global con contador animado y persistencia localStorage
- [x] Skeleton loader + spinner
- [x] Filtro optimizado con debounce
- [x] Tema oscuro con toggle visual
- [x] Toast de confirmación adaptado a dark mode
- [x] Animación con confetti 🎉
- [x] Breadcrumb de navegación
- [x] Responsive design completo (mobile-first)
- [x] Separación modular y arquitectura limpia
- [x] Tests unitarios de componentes y hooks

---

## 🧠 Decisiones técnicas destacadas

- ⚡ **Vite** por rendimiento y DX moderna.
- 🛒 **Persistencia del carrito** usando Context + localStorage, como en un e-commerce real.
- 🧹 **Cache con expiración** de 1 hora para productos (en `utils/cache.js`).
- 🔎 **Debounce** aplicado a búsquedas para evitar renders innecesarios (incluso con cache).
- 💬 **Toasts** visuales adaptados a modo oscuro con `react-hot-toast`.
- 🧼 **Skeletons + loaders** para mantener la UI fluida mientras se cargan los datos.
- 🌗 **Dark mode** totalmente integrado, con transiciones suaves (`transition-colors`).
- 🎨 **Tailwind CSS** para estilado modular, claro y rápido de extender.
- 🧪 **Tests** en componentes clave (`CartContext`, `SearchInput`, `ProductDetailPage`, `hooks`, etc.).
- ♻️ Separación de lógica, componentes y vistas para facilitar escalabilidad.

---

## 📡 API utilizada

Dominio: `https://itx-frontend-test.onrender.com`

- `GET /api/product` → listado de productos
- `GET /api/product/:id` → detalle por ID
- `POST /api/cart` → agregar producto

---

## 🧪 Tests incluidos

- ✅ Componente `SearchInput`
- ✅ Página `ProductDetailPage`
- ✅ Componente `ProductCard`
- ✅ Componente `CartContext` con persistencia
- ✅ Hook `useCachedProducts`
- ✅ Utilidad de `cache`

---

---

## ⚙️ Requisitos previos

- Node.js 18+ recomendado
- npm 9+ (o yarn/pnpm si preferís)
- Clonar el repositorio

---

## 🛠️ Cómo ejecutar el proyecto

```bash
# 1. Instalar dependencias
npm install

# 2. Correr en modo desarrollo (http://localhost:5173)
npm run dev

# 3. Ejecutar tests
npm run test

# 4. Verificar el linting
npm run lint
```

---

## ✅ Notas técnicas

- Utiliza **Vite** como bundler moderno (inicio ultra rápido ⚡).
- Estilos con **Tailwind CSS** (responsive + dark mode).
- ESLint + Prettier para mantener el código limpio y consistente.
- Datos de productos obtenidos desde: `https://itx-frontend-test.onrender.com`.
- La app se ejecuta en `http://localhost:5173` por defecto.

---

## 🧠 Troubleshooting

- Si `tailwindcss` no responde: asegurate de haber corrido `npm install` y de no tener conflictos con versiones de Node.
- Si no levanta el server: verificar que estás usando una versión compatible de Node (ej: `nvm use 18`).
- Si los tests fallan por `describe`, `it`, etc.: asegurate de tener `vitest` correctamente configurado en el entorno y que esté en el `devDependencies`.

---

## ✍️ Autor

👨‍💻 [Juan Ignacio Cibils](https://github.com/jicibils)  
🇦🇷 Desarrollador Fullstack – React, Node.js, AWS  
🧠 Enfocado en producto, performance y experiencia de usuario

---

## 🎁 Bonus

- Animación al agregar al carrito (icono + confetti)
- Skeleton loader y spinner según el tipo de vista
- Visual refinado en mobile y desktop con Tailwind
- Proyecto modular, mantenible y escalable

---

¡Gracias por revisar este proyecto! 🚀
