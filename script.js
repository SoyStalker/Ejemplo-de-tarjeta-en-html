const inputCard = document.querySelector('#inputCard');
const inputDate = document.querySelector('#inputEXP');
const inputCVV = document.querySelector('#inputCVV');

const marcarNumero = '####-####-####-####';
const maskDate = "##/##";
const marcarCVV = '###';

let current = '';
let cardNumber = [];
let cvvNumber = [];
let dateNumber = [];

// numeros
inputCard.addEventListener('keydown', (e) => {
    if(e.key === 'Tab') {
        return;
    }

    e.preventDefault();
    handleInput(marcarNumero, e.key, cardNumber);
    inputCard.value = cardNumber.join("");
})

// vencimiento
inputDate.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      return;
    }
    e.preventDefault();
    handleInput(maskDate, e.key, dateNumber);
    inputDate.value = dateNumber.join("");
  });

// cvv
inputCVV.addEventListener('keydown', (e) => {
    if(e.key === 'Tab') {
        return;
    }

    e.preventDefault();
    handleInput(marcarCVV, e.key, cvvNumber);
    inputCVV.value = cvvNumber.join("");
})

function handleInput(mask, key, arr) {
    let numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  
    if (key === "Backspace" && arr.length > 0) {
      arr.pop();
      return;
    }
  
    if (numeros.includes(key) && arr.length + 1 <= mask.length) {
      if (mask[arr.length] === "-" || mask[arr.length] === "/") {
        arr.push(mask[arr.length], key);
      } else {
        arr.push(key);
      }
    }
  }
