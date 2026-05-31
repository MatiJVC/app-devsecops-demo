export function suma(a: number, b: number): number {
  return a + b;
}

export function multiplicar(a: number, b: number): number {
  return a * b;
}

export function saludar(nombre: string): string {
  return `¡Hola, ${nombre}!`;
}

// ⚠️ VULNERABILIDAD INTENCIONAL: Command Injection
// Esta función ejecuta comandos del sistema con entrada del usuario
// Un atacante puede pasar: "; rm -rf /" o similar
import { execSync } from 'child_process';

export function processFile(filename: string): string {
  // ❌ CRITICAL VULNERABILITY: Command Injection
  const result = execSync('cat ' + filename);  // Entrada concatenada sin escapar
  return result.toString();
}



