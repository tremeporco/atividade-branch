// 1. Soma
const somar = (a, b) => a + b;

// 2. Subtração 
const subtrair = (a, b) => a - b;

// 3. Multiplicação
const multiplicar = (a, b) => a * b;

// 4. Divisão 
const dividir = (a, b) => {
    if (b === 0) return "Erro: Divisão por zero";
    return a / b;
}
  // 5. Potenciação (A elevado a B)
const elevar = (a, b) => Math.pow(a, b);
  
const resto = (a, b) => a % b;