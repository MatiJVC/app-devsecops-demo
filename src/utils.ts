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
  //CRITICAL VULNERABILITY: Code Injection via eval()
  // Esta función ejecuta código JavaScript arbitrario.
  // Un atacante puede pasar: "process.exit()" o malicious code
  eval(userInput);  // VULNERABILIDAD CRÍTICA DE INYECCIÓN DE CÓDIGO
}



