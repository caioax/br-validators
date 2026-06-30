import { validarCPF } from "./src/cpf.js";

console.log("Valido: ", validarCPF("111.444.777-35"));
console.log("Valido: ", validarCPF("529.982.247-25"));
console.log("Valido: ", validarCPF("12345678909"));
console.log("Inválido: ", validarCPF("111.111.111-11"));
console.log("Inválido: ", validarCPF("111.444.777-36"));
console.log("Inválido: ", validarCPF("123.456.789"));
