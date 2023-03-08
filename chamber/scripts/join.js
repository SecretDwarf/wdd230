// Hamburger Menu

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
