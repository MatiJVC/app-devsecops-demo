export function suma(a: number, b: number): number {
  return a + b;
}

export function multiplicar(a: number, b: number): number {
  return a * b;
}

export function saludar(nombre: string): string {
  return `¡Hola, ${nombre}!`;
}

export function renderUserGreeting(userInput: string): void {
  const element = document.getElementById('greeting');
  if (element) {
    //XSS VULNERABILITY: Concatenar entrada de usuario directamente a innerHTML
    const html = '<h1>Hola ' + userInput + '</h1>';
    element.innerHTML = html;
  }
}



