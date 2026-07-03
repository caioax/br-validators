# br-validators

A study project to learn JavaScript and TypeScript in practice. It consists of a library of Brazilian validators.

## Usage

```ts
import { validarCPF, validarCNPJ, validarTelefone } from "br-validators";
```

## Validators

### `validarCPF(cpf: string): boolean`

Validates a Brazilian CPF. Accepts formatted and unformatted inputs.

```ts
validarCPF("111.444.777-35"); // true
validarCPF("11144477735");    // true
validarCPF("111.111.111-11"); // false — all digits equal
validarCPF("111.444.777-36"); // false — wrong check digit
```

### `validarCNPJ(cnpj: string): boolean`

Validates a Brazilian CNPJ. Accepts formatted and unformatted inputs.

```ts
validarCNPJ("11.222.333/0001-81"); // true
validarCNPJ("11222333000181");     // true
validarCNPJ("11.111.111/1111-11"); // false — all digits equal
validarCNPJ("11.222.333/0001-82"); // false — wrong check digit
```

### `validarTelefone(telefone: string): boolean`

Validates a Brazilian phone number (landline or mobile). Accepts formatted and unformatted inputs. Checks for valid area code (DDD), length, and leading digit.

```ts
validarTelefone("(31) 98888-7777"); // true — mobile
validarTelefone("(11) 3333-4444");  // true — landline
validarTelefone("31988887777");     // true — unformatted
validarTelefone("(23) 98888-7777"); // false — invalid area code
validarTelefone("(31) 8888-7777");  // false — mobile missing leading 9
```

## License

MIT
