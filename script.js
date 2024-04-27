var prompt = require('prompt-sync')();
// ------- Funções -------
// conversorCelciusParaFahrenheit();
// eleitoresEVotos();
// numeroInteiros();
// mediaDasNotas();
// tipoDeTriangulo();
// comprarMacas();
// ordemCrescente();
// codigoDeOrigem();
// escrevendo10x();
// parImparNuloNegativo();
// restoIgaulA5();
// tabuada();
// mediaAritimetica();
// pesosDosNumeros();
// numerosPrimos();
// ------- 01 -------
function conversorCelciusParaFahrenheit(){
    saida('Celsius para Fahrenheit', true);
    const resultado = entrada('Temperatura (°C): ');
    saida(`${resultado} Celsius é igual a ${resultado * 1.8 + 32} Fahrenheit!`)
}
// ------- 02 -------
function eleitoresEVotos(){
    saida('Eleições municipais', true);
    const
    eleitores = entrada('Numero de Eleitores: '),
    votosBranco  = entrada('Votos em branco: '),
    votosNulos  = entrada('Votos nulos: '),
    votosValidos  = entrada('Votos válidos: ');

    const somaDosVotos = votosBranco + votosNulos + votosValidos;

    if(somaDosVotos>eleitores){
        saida(`  >  Fraude nas eleições!! <\n\nHá mais votos que eleitores!\nTodos os votos:\t${somaDosVotos}\nEleitores:\t${eleitores}`, true);
        return;
    }

    saida(`No município existe ${eleitores} eleitores!
o resulado da eleição ficou o seguinte:

- ${votosBranco} votos em branco, no caso ${(100 / eleitores) * votosBranco}% dos votos;
- ${votosNulos} votos nulos, no caso ${(100 / eleitores) * votosNulos}% dos votos;
- ${votosValidos} votos válidos, no caso ${(100 / eleitores) * votosValidos}% dos votos.`, false);
}
// ------- 03 -------
function numeroInteiros() {
    saida('Ler inteiros e realizar operações:', true);
    const inteiros = [];
    inteiros.push(entrada('Digite um inteiro: '));
    inteiros.push(entrada(`Digite um inteiro, diferênte de ${inteiros}: `));
    inteiros.push(entrada(`Digite um inteiro, diferênte de ${inteiros}: `));
    saida(`\n1º valor + 25\t\t-> ${inteiros[0]} + 25 = ` + (inteiros[0] + 25), false);
    saida(`2º valor * 3\t\t-> ${inteiros[1]} * 3 = ` + (inteiros[1] * 3), false);
    saida(`12% do 3º valor\t\t-> 12% de ${inteiros[2]} = ` + ((inteiros[2]/100)*12), false);
    saida(`\nSoma dos valores : ${inteiros[0]} + ${inteiros[1]} + ${inteiros[2]} = ` + (inteiros.reduce((resulado, atualValor)=> resulado+atualValor)), false);
}
// ----- 04, 05 -----
function mediaDasNotas(){
    saida('Média das notas', true);
    const nota1 = entrada('Nota da primeira avaliação: '),
    nota2 = entrada('Nota da segunda avaliação: '),
    media = (nota1 + nota2) / 2;
    if (media > 6) {
        saida(`PARABÉNS!\nVocê foi aprovado, com uma média de ${media}`, true);
    }else{
        saida(`Você foi REPROVADO!\nSua média foi ${media}, estude mais!'`, true);
    }
}
// ------- 06 -------
function tipoDeTriangulo(){
    saida('Tipo de triângulo', true);
    const lado1 = entrada('Lado 1 (número): '), lado2 = entrada('Lado 2 (número): '), lado3 = entrada('Lado 3 (número): ');
    if(lado1==lado2 && lado1==lado3){saida('É um Triângulo eqüilátero', true);}else
    if(lado1==lado2 || lado1==lado3 || lado2 == lado3){saida('É um Triângulo isósceles', true);}else
    {saida('É um Triângulo escaleno', true);}
}
// ------- 07 -------
function comprarMacas(){
    saida('Comprar maças', true);
    const macas = entrada('Quantas maças você quer: '),
    duzia = macas < 12;
    saida('Valor total: R$ '+(duzia?(0.30 * macas).toFixed(2):(0.25 * macas).toFixed(2)), false);
}
// ------- 08 -------
function ordemCrescente(){
    saida('Ordem crescente', true);
    const valor1 = entrada('Valor 1: '),
    valor2 = entrada('Valor 2: ');
    if(valor1!=valor2){
        saida('Numeros digitados em ordem: '+[valor1,valor2].sort().join(' e '));
    }else{
        saida('Os valores não podem ser iguais!', true);
    }
}
// ------- 09 -------
function codigoDeOrigem(){
    saida('Região do código de origem', true);
    const codigo = entrada('Código de origem [1 á 50]: ');
    let regiao = '';
    if(codigo>0 && codigo<=50){
    if(codigo>=20){ regiao = 'nordeste';}else
    if(codigo>=10){regiao = 'centro-oeste';}else
    if(codigo>=7){regiao = 'sudeste';}else
    if(codigo>=5){regiao = 'nordeste';}else
    if(codigo==4){regiao = 'oeste';}else
    if(codigo==3){regiao = 'leste';}else
    if(codigo==2){regiao = 'norte'}else
    if(codigo==1){regiao = 'sul'}
    }else{saida('\nERRO:\tCódigo de origem INVÁLIDO!'); codigoDeOrigem(); return; }
    saida('Esse código de origem é da região ' + regiao + 'do país.');
}
// ------- 10 -------
function escrevendo10x(){
    saida('Inteiro 10 vezes', true);
    let contador=1, retorno = entrada('Digite um número inteiro (sem vírgula): ');
    while(contador <= retorno){
        saida(`${contador++}ª vez, que o número ${retorno} é exibido.`, false);
    }
}
// ------- 11 -------
function parImparNuloNegativo(){
    saida('Par, Ímpar, Nulo ou Negativo?', true);
    let valor = 0;
    for(let contador = 0; contador < 5; contador++){
        valor = parseInt(entrada('Digite um número: '));
        if(valor == null || valor < 0){ return };
        saida(`${contador} - O valor ${valor} é um número ${valor % 2 === 0 ? "par":"ímpar"}`, false);
    }
}
// ------- 12 -------
function restoIgaulA5(){
    saida('Resto igual a 5 de 1000 á 1999', true);
    for(let numero = 1000; numero < 2000; numero++){
        if((numero%11)==5){ saida(`Número ${numero} tem resto igual a 5`, false); }
        numero++;
    }
}
// ------- 13 -------
function tabuada(){
    saida('Tabuada', true);
    const array=[];
    array.push(entrada('Digite um número [1/5]: '));
    array.push(entrada('Digite um número [2/5]: '));
    array.push(entrada('Digite um número [3/5]: '));
    array.push(entrada('Digite um número [4/5]: '));
    array.push(entrada('Digite um número [5/5]: '));
    array.forEach(n=>{
        saida(`\n${n}\n`, false);
        [1,2,3].forEach(m=> saida(`${m} x ${n} = ${m * n}`, false));
        }
    );
}
// ------- 14 -------
function mediaAritimetica(){
    saida('Média aritimetica', true);
    let numeros=[], entradas = 1.0;
    while(parseInt(entradas)!=0)
    {
        entradas = parseFloat(prompt('Digite um número decimal [0 para sair]: '));
        numeros.push(entradas);
    }
    saida(`A média aritimetica é ${numeros.reduce((n, numero) => n + numero) / 2}`, false);
}
// ------- 15 -------
function pesosDosNumeros(){
    saida('Pesos dos números', true);

    let numero_digitado = [], peso_digitado = [], soma = 0, somaPesos = 0;

    numero_digitado.push(parseInt(entrada('Digite o 1° número: ')));
    peso_digitado.push(parseInt(entrada(`Peso do 1º número ${numero_digitado[0]} digitado: `)));

    numero_digitado.push(parseInt(entrada('Digite o 2º número: ')));
    peso_digitado.push(parseInt(entrada(`Peso do 2º número ${numero_digitado[1]} digitado: `)));

    numero_digitado.push(parseInt(entrada('Digite o 3º número: ')));
    peso_digitado.push(parseInt(entrada(`Peso do 3º número ${numero_digitado[2]} digitado: `)));

    for(n in numero_digitado){
        soma += numero_digitado[n] * peso_digitado[n];
        somaPesos += peso_digitado[n];
        console.log(n);
    }

    media = soma / somaPesos;

    saida(`\nMédia ponderada é ${media.toFixed(2)}`);
}
// ------- 16 -------
function numerosPrimos(){
    saida('50 primeiros números primos', true);
    let n = 100, continuar = true, primos= [];
    while(continuar){
        if(n % 2 != 0){
            primos.push(n);
            if((primos.length) >= 50)
            {
                continuar = false;
            }
        }
        n++;
    }
    primos.forEach(e=>saida(`${e} é um número primo`, false));
}
// ------- Entrada -------
function entrada(mensagem) {
   return parseInt(prompt(mensagem));
}
// ------- Saida -------
function saida(mensagem, destaque){
    if (destaque) {
        mensagem = `
\t-------------------------------
\t >> ${mensagem}
\t-------------------------------
`;
    }
    console.log(mensagem);
}