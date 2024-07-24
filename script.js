const tabelaCodificacao = {
    a: "B",
    b: "C",
    c: "D",
    // ... resto do alfabeto
    z: "A"
};

const textoEntrada = document.getElementById("textoEntrada");
const textoSaida = document.getElementById("textoSaida");
const btnCodificar = document.getElementById("btnCodificar");
const btnDecodificar = document.getElementById("btnDecodificar");

btnCodificar.addEventListener("click", codificarTexto);
btnDecodificar.addEventListener("click", decodificarTexto);

function codificarTexto() {
    const textoOriginal = textoEntrada.value.toLowerCase();
    let textoCodificado = "";

    for (let i = 0; i < textoOriginal.length; i++) {
        const letra = textoOriginal[i];
        if (tabelaCodificacao[letra]) {
            textoCodificado += tabelaCodificacao[letra];
        } else {
            textoCodificado += letra;
        }
    }

    textoSaida.value = textoCodificado;
}

function decodificarTexto() {
    const textoCodificado = textoEntrada.value.toLowerCase();
    let textoDecodificado = "";

    for (let i = 0; i < textoCodificado.length; i++) {
        const letra = textoCodificado[i];
        for (const chave in tabelaCodificacao) {
            if (tabelaCodificacao[chave] === letra) {
                textoDecodificado += chave;
                break;
            }
        }

        if (!textoDecodificado.includes(letra)) {
            textoDecodificado += letra;
        }
    }

    textoSaida.value = textoDecodificado;
}
