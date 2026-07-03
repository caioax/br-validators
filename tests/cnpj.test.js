import { describe, it, expect } from "vitest";
import { validarCNPJ } from "../src/cnpj.js";

describe("validarCNPJ", () => {
    // Cnpjtas válidos
    it("Deve retornar true para CNPJ válido", () => {
        expect(validarCNPJ("11.222.333/0001-81")).toBe(true);
    });

    it("Deve retornar true para CNPJ válido", () => {
        expect(validarCNPJ("33.000.167/0001-01")).toBe(true);
    });

    it("Deve retornar true para CNPJ válido", () => {
        expect(validarCNPJ("11222333000181")).toBe(true);
    });

    // Cnpjtas inválidos
    it("Deve retornar false para CNPJ inválido", () => {
        expect(validarCNPJ("11.111.111/1111-11")).toBe(false);
    });

    it("Deve retornar false para CNPJ inválido", () => {
        expect(validarCNPJ("11.222.333/0001-82")).toBe(false);
    });

    it("Deve retornar false para CNPJ inválido", () => {
        expect(validarCNPJ("11.222.333/0001")).toBe(false);
    });

    it("Deve retornar false para CNPJ inválido", () => {
        expect(validarCNPJ(null)).toBe(false);
    });

    it("Deve retornar false para CNPJ inválido", () => {
        expect(validarCNPJ(112223330001)).toBe(false);
    });

    it("Deve retornar false para CNPJ inválido", () => {
        expect(validarCNPJ("")).toBe(false);
    });
});
