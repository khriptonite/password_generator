let btn = document.getElementById("generate-pass-btn");
let passOne = document.getElementById("first-pass");
let passTwo = document.getElementById("second-pass");
let passLength = document.getElementById('pass-length')
let numCheck = document.getElementById('add-nums');
let symCheck = document.getElementById('add-sym')
let copied = document.querySelector('.copied');
let fieldOne = document.querySelector('.one');
let fieldTwo = document.querySelector('.two');

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



let letters = []
let numbers = []
let symbols = []

for (i = 0; i <= 51; i++) {
    letters.push(characters[i])
} 
for (i = 52; i <= 61; i++) {
    numbers.push(characters[i])
}
for (i = 62; i < 91; i++) {
    symbols.push(characters[i])
}

let withNums = letters.concat(numbers)
let withSym = letters.concat(symbols)
let withBoth = withNums.concat(symbols)




function ifChecked() {
  if (numCheck.checked == true && symCheck.checked == true) {
      return withBoth
  } else if (symCheck.checked == true) {
      return withSym
  } else if (numCheck.checked == true) {
      return withNums
  } else {
      return letters 
  }
} 
    
function getLength() {
    let lengthInput = parseInt(passLength.value);
    if(lengthInput != null && lengthInput < 16) {
        return lengthInput
        } else return null;
    }

function generatePass() {
    let pass = "";
         
        for (let i = 0; i < getLength(); i++){
            let randomNr = Math.floor(Math.random() * ifChecked().length) 
            pass += ifChecked()[randomNr]
            }
    
        return pass;
}

btn.addEventListener('click', function() {
    passOne.textContent = generatePass();
    passTwo.textContent = generatePass(); 
})




fieldOne.onclick = function() {
  document.execCommand("copy");
  fadeOut();
}

passOne.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", passOne.textContent);
    
    console.log(event.clipboardData.getData("text"))
  }
});


fieldTwo.onclick = function() {
  document.execCommand("copy");
  fadeOut();
}

passTwo.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain",passTwo.textContent);
    
    console.log(event.clipboardData.getData("text"))
  }
});


function fadeOut() {
    copied.style.display = 'flex';
    setTimeout(function() {
        copied.style.display = 'none';
    }, 2000)
}