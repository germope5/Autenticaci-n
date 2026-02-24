// API calls related to authentication (login, register, logout, refresh-token, me)
//Este archivo se encargará de hacer las peticiones al backend.

//Antes de comenzar con el desarrollo, hay que definir el cliente
//HTTP y la configuración base.
import axios from 'axios';

// Usamos variables de entorno de Vite (import.meta.env) si existen, sino un valor por defecto.
export const API_URL = import.meta.env?.VITE_API_URL || 'http://localhost:3000/api';

// Creamos una instancia de axios configurada
export const authClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // withCredentials: true es CRUCIAL para enviar cookies HttpOnly (como el refresh token)
  withCredentials: true, 
});

//Vamos a comenzar con la Capa de Datos
//Función del Login
export const Login = async (credentials: LoginCredentials) => {
    try {
        const response = await authClient.post<AuthResponse>('/auth/login', credentials);
        return response.data;

    } catch (error) {
        console.error("Error en el Login: ", error);
        throw error;
    }
    
}