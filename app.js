// Esse código está realizando uma operação de conversão de um número binário em um número decimal.

// O código utiliza uma variável chamada "valor" e uma string chamada "bin", que contém o valor binário a ser convertido em decimal.

// O loop "for" percorre cada dígito do número binário, começando da esquerda para a direita.

// A cada iteração, o código extrai um dígito do número binário usando o método "substr()" da string "bin". O método "parseInt()" converte esse dígito em um número inteiro, que é multiplicado pelo resultado da função "Math.pow(2, bin.length - 1 - i)".

// Essa função "Math.pow(2, bin.length - 1 - i)" calcula o valor da potência de 2 correspondente ao dígito na posição "i" do número binário. Por exemplo, se o dígito em questão for o segundo da esquerda (ou seja, i = 1), a potência de 2 será 2 elevado à (tamanho do número binário - 1 - 1) = 2.

// O resultado da multiplicação é adicionado ao valor acumulado em "valor". Esse processo é repetido para cada dígito do número binário, resultando em uma conversão completa do número binário para decimal. No final do loop, a variável "valor" contém o valor decimal resultante da conversão do número binário. 


function binToDec(bin) {
//Essa linha de código está criando uma variável chamada "valor" e atribuindo a ela o valor inicial de 0.
  let valor = 0;
  //Essa linha de código está criando um loop "for" que irá iterar sobre uma sequência de elementos (nesse caso, elementos de um array chamado "bin") e executar um bloco de código para cada elemento.
  for (let i = 0; i < bin.length; i++) {
    valor += parseInt(bin.substr(i, 1)) * Math.pow(2, bin.length - 1 - i);
  }
  return valor;
}


console.log(binToDec("01025"))
