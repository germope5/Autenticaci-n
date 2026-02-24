# Módulo de Autenticación (React + Vite + TypeScript)

## 📌 Finalidad del Proyecto

Este proyecto es un **Módulo de Autenticación Frontend** robusto, moderno y altamente escalable para aplicaciones React. Está diseñado para gestionar de manera centralizada y segura todo el flujo de inicio de sesión, registro y manejo de sesiones de los usuarios.

La finalidad principal es contar con una base estructural sólida (boilerplate) que se pueda conectar fácilmente a cualquier backend moderno (ej. Node.js, NestJS, Next.js API Routes), delegando las responsabilidades de estado y consumo de API en capas bien definidas.

## 🎯 Objetivo

El objetivo de este módulo es proveer los **mejores estándares de seguridad actuales** en cuanto a la gestión de credenciales en aplicaciones Single Page Application (SPA).

Para lograrlo, el proyecto está preparado para manejar un **Flujo de Doble Token (Access Token & Refresh Token)**:

1. **Contra ataques XSS (Cross-Site Scripting):** El _Access Token_ de corta duración se gestiona exclusivamente en la memoria de la aplicación (mediante un estado global como Zustand), evitando su almacenamiento en `localStorage` o `sessionStorage`.
2. **Renovación segura:** El _Refresh Token_ de larga duración debe ser manipulado por el backend e inyectado como una Cookie `HttpOnly`, `Secure` y `SameSite=Strict`. El cliente HTTP (Axios) está configurado con `withCredentials: true` para enviar esta cookie automáticamente sin que el código de JavaScript tenga acceso a leerla.

## 📂 Arquitectura (Feature-Driven Design)

El módulo sigue una arquitectura orientada a características (_Feature-Sliced Design_ o _Feature-based_), lo que significa que todo lo relacionado a la autenticación vive dentro de su propio dominio aislado, mejorando la mantenibilidad:

```text
src/features/auth/
├── api/          # Configuración de Axios y llamadas al backend (login, register, etc.)
├── components/   # Componentes de UI exclusivos de auth (LoginForm, RegisterForm)
├── hooks/        # Custom hooks de React (ej. useAuth) para abstraer la lógica
├── store/        # Gestor de estado global (ej. Zustand) para la sesión del usuario
├── types/        # Interfaces de TypeScript y validación de datos
└── utils/        # Funciones helpers puras (manejo seguro de tokens, JWT parsing, etc.)
```

## 🛠️ Tecnologías Utilizadas

- **React 18**: Librería principal para la interfaz de usuario.
- **Vite**: Entorno de desarrollo ultrarrápido y bundler.
- **TypeScript**: Para tipado estático seguro y definición de interfaces en contratos de API.
- **Axios**: Cliente HTTP configurado para intercepción y envío de cookies seguras.
- _(Planeado)_ **Zustand / Context API**: Para la gestión ágil del estado de autenticación.

## 🚀 Inicio Rápido

1. Clonar el repositorio.
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Configurar variables de entorno (Crear archivo `.env`):
   ```env
   VITE_API_URL=http://tu-backend.com/api
   ```
4. Levantar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
