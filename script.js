// Typewriter effect 
const nameText = "Shaunak Samant";
const nameElement = document.querySelector("header h1");
let idx = 0;

nameElement.innerHTML = "";

function typeWriter() {
  if (idx < nameText.length) {
    nameElement.innerHTML += nameText.charAt(idx);
    idx++;
    setTimeout(typeWriter, 150); 
  }
}

typeWriter();
