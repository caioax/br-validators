import { describe, it, expect } from "vitest";
import { validarCPF } from "../src/cpf.js";

describe("validarCPF", () => {
    // Cpfs válidos
    it("Deve retornar true para CPF válido", () => {
        expect(validarCPF("111.444.777-35")).toBe(true);
    });

    it("Deve retornar true para CPF válido", () => {
        expect(validarCPF("529.982.247-25")).toBe(true);
    });

    it("Deve retornar true para CPF válido", () => {
        expect(validarCPF("12345678909")).toBe(true);
    });

    // Cpfs inválidos
    it("Deve retornar false para CPF inválido", () => {
        expect(validarCPF("111.111.111-11")).toBe(false);
    });

    it("Deve retornar false para CPF inválido", () => {
        expect(validarCPF("111.444.777-36")).toBe(false);
    });

    it("Deve retornar false para CPF inválido", () => {
        expect(validarCPF("123.456.789")).toBe(false);
    });

    it("Deve retornar false para CPF inválido", () => {
        expect(validarCPF(null)).toBe(false);
    });

    it("Deve retornar false para CPF inválido", () => {
        expect(validarCPF(11144477736)).toBe(false);
    });

    it("Deve retornar false para CPF inválido", () => {
        expect(validarCPF("")).toBe(false);
    });
});
