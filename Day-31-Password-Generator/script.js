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

clipboardEl.addEventListener("click", () => {
  //A new textarea element is created in the DOM. This is a temporary element used to hold the text that will be copied to the clipboard.
  const textarea = document.createElement("textarea");

  //The text content of an element referred to as resultEl is retrieved and stored in the password variable.
  const password = resultEl.innerText;
  //If password is empty (i.e., if resultEl contains no text), the function returns immediately, and no further actions are taken.
  if (!password) {
    return;
  }

  //If password is not empty, its value is assigned to the textarea element's value property.
  textarea.value = password;
  //he textarea element is appended to the body of the document. This is necessary because the execCommand("copy") method can only copy the contents of elements that are currently in the document.
  document.body.appendChild(textarea);
  //The select() method is called on the textarea element, which selects all its text.
  textarea.select();
  //The execCommand("copy") method is called, which copies the selected text (i.e., the contents of the textarea element) to the clipboard.
  document.execCommand("copy");
  //The textarea element is removed from the document. Since its purpose was only to hold the text temporarily for copying, it's no longer needed after the text has been copied.
  textarea.remove();
  
  alert("password copied to the clipboard");
});

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

  return finalPasswoard;
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
