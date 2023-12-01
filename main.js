let colorinput = document.querySelectorAll(".inputs input");

let textarea = document.querySelector("textarea");

let selsetinput = document.querySelector("#selest");

let colorbox = document.querySelector(".gradient-box");

let randombtn = document.querySelector(".refresh");

let copybtn = document.querySelector(".copy");

let body = document.querySelector("body")



getRandomcolor();


function getRandomcolor() {
  let random = Math.floor(Math.random() * 0xffffff).toString(16);
  let random1 = Math.floor(Math.random() * 0xffffff).toString(16);
  if (random.length <= 2 || random1.length <= 2) {
    random.padStart(6, "0");
    random1.padStart(6, "0");
  }
  colorinput[0].value = "#" + random;
  colorinput[1].value = "#" + random1;

  colorchanger ()
}
function colorchanger () {
  let theresult = `linear-gradient(${selsetinput.value}, ${colorinput[0].value}, ${colorinput[1].value})`;
  colorbox.style.background = theresult;
  body.style.background = theresult;
  textarea.innerHTML = theresult;
}

function copy() {
  navigator.clipboard.writeText(textarea.value);
  copybtn.innerHTML = "code copid";
  setTimeout(() => {
    copybtn.innerHTML = "copy code";
  }, 1600);
  c;
}
setTimeout(() => {
  copybtn.innerHTML = "color copid";
}, 1600);

randombtn.onclick = getRandomcolor;

// colorinput.forEach((inp) => {
//   inp.addEventListener("input",()=> genretgradient);
// });
// selsetinput.addEventListener("change"()=> genretgradient);

copybtn.onclick = copy;

colorinput.forEach((input)=> {
input.addEventListener("input",()=> colorchanger())
})