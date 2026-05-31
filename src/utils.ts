export function suma(a: number, b: number): number {
  return a + b;
}

export function multiplicar(a: number, b: number): number {
  return a * b;
}

export function saludar(nombre: string): string {
  return `¡Hola, ${nombre}!`;
}

// ⚠️ VULNERABILIDAD INTENCIONAL: XSS via innerHTML
// Esta función toma entrada del usuario y la inyecta directamente en innerHTML
// Un atacante puede pasar: <img src=x onerror="alert('XSS')">
export function renderUserGreeting(userInput: string): void {
  const element = document.getElementById('greeting');
  if (element) {
    element.innerHTML = userInput;  // ❌ XSS VULNERABILITY: entrada no sanitizada
  }
}


