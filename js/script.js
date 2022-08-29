
const output = document.querySelector(".output");

//indexOf = -1 default

var number = "0";
// console.log(number.indexOf());
var operatore;
var numero;
var memoria;

function displayNumber(num) {
  if (eval(number) === 0) {
    number = num;
    //  console.log(num);
  } else {
    number = number + num;
    //  console.log(number);
  }
  output.innerHTML = number;
}

function addDecimal() {
  let n = number.lenght;
  if (n === 0) {
    number = "0.";
  } else {
    if (number.indexOf("." === -1)) {
      number = number + ".";
    }
  }
  output.innerHTML = number;
}

function displayOperatore(opera) {
  output.innerHTML = opera;
  memoria = number;
  operatore = opera;
  number = "";
}

function calcolatrice() {
  //   console.log(number);
  //   console.log(memoria);
  if (operatore === "+") {
    numero = eval(memoria) + eval(number);
  }
  if (operatore === "-") {
    numero = eval(memoria) - eval(number);
  }
  if (operatore === "/") {
    numero = eval(memoria) / eval(number);
  }
  if (operatore === "*") {
    numero = eval(memoria) * eval(number);
  }

  output.innerHTML = numero;
}

function outputClear() {
  numero = 0;
  number = "0";
  operatore = "";
  memoria = "0";
  output.innerHTML = number; //?
}



