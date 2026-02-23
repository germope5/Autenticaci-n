export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: "admin" | "user";
  isEmailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthTokens {
  accessToken: string;
  // Refresh token idealmente debe ser manejado mediante cookies HttpOnly por seguridad.
  // Sin embargo, en algunos flujos se devuelve en el body, por lo que se tipa aquí.
  refreshToken?: string;
}

export interface AuthResponse {
  user: User;
  tokens: AuthTokens;
}

export interface LoginCredentials {
  email: string;
  password: string;
  // Opcional para CSRF token si se usa proteccion doble submit, etc.
  csrfToken?: string;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

// Interfaces de Errores Estandarizados
export interface ApiError {
  message: string;
  code: string;
  errors?: Record<string, string[]>;
}
