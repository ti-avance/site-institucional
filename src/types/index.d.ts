// Example: Global type definitions

export type UserRole = 'admin' | 'user' | 'guest';

export interface ApiResponse<T> {
  data: T;
  error?: string;
}
