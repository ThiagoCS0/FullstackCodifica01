var prompt = require('prompt-sync')();
// ------- Funções -------
//ConversorCelciusParaFahrenheit();
EleitoresEVotos();

// ------- 01 -------
function ConversorCelciusParaFahrenheit(){
    M("Converter de Celsius para Fahrenheit");
    let resultado = prompt("Temperatura (°C): ");
    M(resultado * 1.8 + 32)
}
// ------- 02 -------
function EleitoresEVotos(){
    let
    eleitores = parseInt(prompt("Numero de Eleitores: ")),
    votosBranco  = parseInt(prompt("Votos em branco: ")),
    votosNulos  = parseInt(prompt("Votos nulos: ")),
    votosValidos  = parseInt(prompt("Votos válidos: "));

    const somaDosVotos = votosBranco + votosNulos + votosValidos;

    if(somaDosVotos>eleitores){
        M(`  >  Fraude nas eleições!! <\n\nHá mais votos que eleitores!\nTodos os votos:\t${somaDosVotos}\nEleitores:\t${eleitores}`);
        return;
    }

    M(`No município existe ${eleitores} eleitores!
o resulado da eleição ficou o seguinte:

- ${votosBranco} votos em branco, no caso ${(100 / eleitores) * votosBranco}% dos votos;
- ${votosNulos} votos nulos, no caso ${(100 / eleitores) * votosNulos}% dos votos;
- ${votosValidos} votos válidos, no caso ${(100 / eleitores) * votosValidos}% dos votos.`);
}
// ------- 03 -------
// ------- 04 -------
// ------- 05 -------
// ------- 06 -------
// ------- 07 -------
// ------- 08 -------
// ------- 09 -------
// ------- 10 -------
// ------- 11 -------
// ------- 12 -------
// ------- 13 -------
// ------- 14 -------
// ------- 15 -------
// ------- 16 -------
// ------- Saida -------
function M(mensagem){
console.log(`
-------------------------------
${mensagem}
-------------------------------
`);
}