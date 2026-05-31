export function suma(a: number, b: number): number {
  return a + b;
}

export function multiplicar(a: number, b: number): number {
  return a * b;
}

export function saludar(nombre: string): string {
  return `¡Hola, ${nombre}!`;
}

// VULNERABILIDAD INTENCIONAL: Command Injection
// Esta función ejecuta comandos del sistema con entrada del usuario
// Un atacante puede pasar: "; rm -rf /" o similar
import { readFileSync } from 'fs';

export function processFile(filename: string): string {
  const result = readFileSync(filename, 'utf-8');  
  return result;
}


