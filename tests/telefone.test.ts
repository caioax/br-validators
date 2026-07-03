import { describe, it, expect } from "vitest";
import { validarTelefone } from "../src/telefone.js";

describe("validarTelefone", () => {
    // Telefones válidos
    it("Deve retornar true para Telefone válido", () => {
        expect(validarTelefone("(31) 98888-7777")).toBe(true);
    });

    it("Deve retornar true para Telefone válido", () => {
        expect(validarTelefone("(11) 3333-4444")).toBe(true);
    });

    it("Deve retornar true para Telefone válido", () => {
        expect(validarTelefone("31988887777")).toBe(true);
    });

    // Telefones inválidos
    it("Deve retornar false para Telefone inválido", () => {
        expect(validarTelefone("(31) 8888-7777")).toBe(false);
    });

    it("Deve retornar false para Telefone inválido", () => {
        expect(validarTelefone("(23) 98888-7777")).toBe(false);
    });

    it("Deve retornar false para Telefone inválido", () => {
        expect(validarTelefone("(31) 9888-777")).toBe(false);
    });
});
