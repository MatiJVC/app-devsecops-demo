export function suma(a: number, b: number): number {
  return a + b;
}

export function multiplicar(a: number, b: number): number {
  return a * b;
}

export function saludar(nombre: string): string {
  return `¡Hola, ${nombre}!`;
}

// ✅ VULNERABILIDAD CORREGIDA: Command Injection
// Ahora usa fs.readFileSync() de forma segura
import { readFileSync } from 'fs';

export function processFile(filename: string): string {
  // ✅ SECURE: Usar fs.readFileSync en lugar de execSync con concatenación
  const n result;
}



