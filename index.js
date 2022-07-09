const ReadFile = require("./src/read_file.js");
const CountingFrequence = require("./src/counting_frequence");
const HuffmanNode = require("./huffman_node");

const myArgs = process.argv.slice(2);

let readFileFromText = new ReadFile(myArgs[0]);

let text = readFileFromText.myData();

let n = Object.keys(text).length;

let counting_frequence = new CountingFrequence(text);

let frequenceText = counting_frequence.getFrequence();
let arrayDeLetras = Object.keys(frequenceText);
let arrayDeFrequencia = Object.values(frequenceText);



function imprimeCodigo(raiz,qtd){
  if(raiz.esquerda == null && 
     raiz.direita == null && 
    (raiz.letra).toLowerCase() != (raiz.letra).toUpperCase()
     
    ){
      console.log(raiz.letra + ":" +qtd);
      return;
    }

  imprimeCodigo(raiz.esquerda,qtd +"0");
  imprimeCodigo(raiz.direita,qtd+"1");
}

 


let fila = [];

for(let indice = 0;indice<n;indice++){
  let no = new HuffmanNode();
  no.letra = arrayDeLetras[indice];
  no.quantidade = arrayDeFrequencia[indice];
  no.esquerda =null;
  no.direita = null;
  
  fila.push(no);
}

let raiz = null;
fila.sort(
  function(a,b){
    return a.quantidade - b.quantidade;
  }
);

while(fila.length >1){
  let x = fila[0];
  fila.shift();

  let y = fila[0];
  fila.shift();

  let noNovo = new HuffmanNode();

  noNovo.quantidade = x.quantidade + y.quantidade;
  noNovo.letra = '-';

  noNovo.esquerda = x;

  noNovo.direita = y;

  raiz = noNovo;

  fila.push(noNovo);
  fila.sort(function(a,b){return a.data-b.data;});
}


imprimeCodigo(raiz,"");


