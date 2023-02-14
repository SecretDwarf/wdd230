const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

function toggleMenu(){
    mainnav.classList.toggle('responsive');
    hambutton.classList.toggle('responsive');
}

hambutton.addEventListener('click', toggleMenu);

let w_names = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let m_names = ['January','February','March','April','May','June','July','August','September','October','November','December'];
let mydate = new Date();
console.log(mydate);

let weekname = w_names[mydate.getDay()];
let numDay = mydate.getDay();
let monthname = m_names[mydate.getMonth()];

const dateoutput = document.querySelector('#date');

dateoutput.textContent = weekname + ", " + mydate.getDate() + " " + monthname + " " + mydate.getFullYear();

const parent = document.querySelector('#meeting');


if (mydate.getDay() == 1 || mydate.getDay() == 2) {
    mainnav.style.top = '180px';
    parent.style.display = 'block';
}

const temp = document.querySelector('.t').textContent;
const ws = document.querySelector('.ws').textContent;

let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(ws,0.16)) + (0.4275*temp*Math.pow(ws,0.16)));

console.log(chill);

if (temp <= 50 && ws >= 3) {
    document.querySelector('.wc').textContent = chill;
}

/* storage local and session */

localStorage.setItem('name', 'Jacob Briggs - Permanent')
sessionStorage.setItem('class', 'WDD230 - Not Permanent')
