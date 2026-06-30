export function validarCNPJ(cnpj) {
    // Tirando pontos, barras e traços
    cnpj = cnpj.replace(/[./-]/g, "");
    if (cnpj.length !== 14) return false;

    // Verificando se os dígitos são todos iguais
    if (new Set(cnpj).size === 1) return false;

    // Conta do primeiro dígito verificador
    let r = 0;
    let peso = 5;
    for (let i = 0; i < 12; i++) {
        r += Number(cnpj[i]) * peso;
        peso--;
        if (peso === 1) peso = 9;
    }

    r = 11 - (r % 11);
    if (r > 9) r = 0;

    if (cnpj[12] !== String(r)) return false;

    // Conta do segundo dígito verificador
    r = 0;
    peso = 6;
    for (let i = 0; i < 13; i++) {
        r += cnpj[i] * peso;
        peso--;
        if (peso === 1) peso = 9;
    }

    r = 11 - (r % 11);
    if (r > 9) r = 0;

    return cnpj[13] === String(r);
}
