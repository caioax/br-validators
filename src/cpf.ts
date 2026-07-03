export function validarCPF(cpf: string): boolean {
    // Tirando pontos e traços
    cpf = cpf.replace(/[.-]/g, "");
    if (cpf.length !== 11) return false;

    // Verificando se os dígitos são todos iguais
    if (new Set(cpf).size === 1) return false;

    // Conta do primeiro dígito verificador
    let r = 0;
    let peso = 10;
    for (let i = 0; i < 9; i++) {
        r += Number(cpf[i]) * peso;
        peso--;
    }

    r = 11 - (r % 11);
    if (r > 9) r = 0;

    if (cpf[9] !== String(r)) return false;

    // Conta do segundo digito verificador
    r = 0;
    peso = 11;
    for (let i = 0; i < 10; i++) {
        r += Number(cpf[i]) * peso;
        peso--;
    }

    r = 11 - (r % 11);
    if (r > 9) r = 0;

    return cpf[10] === String(r);
}
