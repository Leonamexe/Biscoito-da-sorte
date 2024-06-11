const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const openFortuneCookie = document.querySelector("#openFortuneCookie");
let RandomNumber = Math.round(Math.random() * 5) 
let xAttempts = 1 


const phrasesOfCookie = [
    "Você terá um ótimo dia hoje!",
    "Coisas boas estão vindo em sua direção!",
    "Espere uma mudança positiva em sua vida em breve!",
    "Você é amado e apreciado por aqueles ao seu redor.",
    "Uma agradável surpresa está reservada para você.",
    "Seu trabalho árduo em breve será recompensado.",
  ];

openFortuneCookie.addEventListener("click", openCookieEvent);

function openCookieEvent(){
    screen1.classList.add('hide')
    screen2.classList.remove('hide')
    screen2.querySelector('p').innerText = phrasesOfCookie[RandomNumber]
    xAttempts++
}

function closedCookieEvent(){
    screen1.classList.remove('hide')
    screen2.classList.add('hide')
    xAttempts = 1
    RandomNumber = Math.round(Math.random() * 5)
}