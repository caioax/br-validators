export function validarTelefone(telefone) {
    // Verificando se o tipo esta correto (É uma string)
    if (typeof telefone !== "string") return false;

    // Tirando espaços, parenteses e traços
    telefone = telefone.replace(/[ ()-]/g, "");
    if (telefone.length < 10 || telefone.length > 11) return false;

    // Verificando se o primeio dígito do número é o 9 caso tenha 11 digitos
    if (telefone.length === 11 && telefone[2] !== "9") return false;

    // Verificando se o primeio dígito do número é algum de 2 a 5 caso tenha 10 digitos
    if (
        telefone.length === 10 &&
        (Number(telefone[2]) < 2 || Number(telefone[2]) > 5)
    )
        return false;

    // Verificando se o ddd é válido
    let ddds = new Set([
        11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34,
        35, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55, 61, 62,
        63, 64, 65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85,
        86, 87, 88, 89, 91, 92, 93, 94, 95, 96, 97, 98, 99,
    ]);

    return ddds.has(Number(telefone[0] + telefone[1]));
}
