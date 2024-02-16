const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

generateEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";

  //lets you know the total of settings checked, they are the parameters of the generate function we are calling above 
  const typesCount = lower + upper + number + symbol;

  //filters and shows only true/checked values of the types Array
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );


  if (typesCount === 0) {
    return "";
  }

  //loops through whatever the length in the length input field and through the randomFunc object to generate a random password
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
     //lists the checked types that will be used to  generate the passowrd
        const funcName = Object.keys(type)[0];
   
      // the generated password will be the output of each of the Random Functions matching the types "lower", "upper" etc that is being loop here
      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPasswoard = generatedPassword.slice(0, length);

  return finalPasswoard
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#%&$§(){}/.:<>=";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
