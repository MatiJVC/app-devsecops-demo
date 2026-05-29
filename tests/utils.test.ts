import { suma, multiplicar, saludar } from '../src/utils';

describe('Utils', () => {
  describe('suma', () => {
    it('debe sumar dos números correctamente', () => {
      expect(suma(2, 3)).toBe(5);
    });

    it('debe manejar números negativos', () => {
      expect(suma(-2, 3)).toBe(1);
    });

    it('debe retornar 0 cuando suma 0 + 0', () => {
      expect(suma(0, 0)).toBe(0);
    });
  });

  describe('multiplicar', () => {
    it('debe multiplicar dos números correctamente', () => {
      expect(multiplicar(2, 3)).toBe(6);
    });

    it('debe retornar 0 al multiplicar por 0', () => {
      expect(multiplicar(5, 0)).toBe(0);
    });
  });

  describe('saludar', () => {
    it('debe retornar un saludo personalizado', () => {
      expect(saludar('Juan')).toBe('¡Hola, Juan!');
    });

    it('debe trabajar con cualquier nombre', () => {
      expect(saludar('María')).toBe('¡Hola, María!');
    });
  });
});
