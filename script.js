function somar() {
    num1 = Number(prompt('Digite o primeiro número'));
    num2 = Number(prompt('Digite o segundo número'));
    resultado = num1 + num2;
    alert(`Os números escolhidos são ${num1} e ${num2}`);
    (num1 === num2) ? (alert('Os números possuem mesmo valor e mesmo tipo de variável')) : alert('Os números possuem valores diferentes')
    console.log(resultado);
            (resultado < 10) ? (alert('A soma dos números é menor que 10')) : (resultado <= 20) ? (alert('A soma dos números está entre 10 e 20')) : (alert('A soma é maior que 20'))
        delete (num1, num2);

}
somar();

function retorno() {
    const escolha = Number(prompt('Deseja fazer outra comparação?\n 1 - Sim\n 2 - Não'));
    (escolha === 1) ? somar() : (alert('Adeus'));
    
}
retorno();