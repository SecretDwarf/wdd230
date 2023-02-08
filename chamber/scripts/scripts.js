const hamburger = document.querySelector('.ham');

let clickCounter = 1;
hamburger.addEventListener('click', () => {

    clickCounter = clickCounter + 1

    if (clickCounter % 2 == 0 && !(document.querySelector('.navContainer').classList.contains('large'))) {
        document.querySelector('.navContainer').classList.toggle('on');
        const navDiv = document.querySelector('.navContainer');
        const navBar = document.createElement('nav');
        navDiv.appendChild(navBar);

        const a1 = document.createElement('a');
        a1.setAttribute("href", "#");
        a1.textContent = "Discover";
        navBar.appendChild(a1);

        const a2 = document.createElement('a');
        a2.setAttribute("href", "#");
        a2.textContent = "Directory";
        navBar.appendChild(a2);

        const a3 = document.createElement('a');
        a3.setAttribute("href", "#");
        a3.textContent = "Join";
        navBar.appendChild(a3);

        const a4 = document.createElement('a');
        a4.setAttribute("href", "#");
        a4.textContent = "Contact";
        navBar.appendChild(a4);

    } else {
        document.querySelector('nav').remove()
        document.querySelector('.navContainer').classList.toggle('on');
    }
});

function reportWindowSize() {
    if (window.innerWidth >= 940 && !(document.querySelector('.navContainer').classList.contains('on'))) {
        document.querySelector('.navContainer').classList.toggle('on');
        document.querySelector('.navContainer').classList.toggle('large');
        const navDiv = document.querySelector('.navContainer');
        const navBar = document.createElement('nav');
        navDiv.appendChild(navBar);

        const a1 = document.createElement('a');
        a1.setAttribute("href", "#");
        a1.textContent = "Discover";
        navBar.appendChild(a1);

        const a2 = document.createElement('a');
        a2.setAttribute("href", "#");
        a2.textContent = "Directory";
        navBar.appendChild(a2);

        const a3 = document.createElement('a');
        a3.setAttribute("href", "#");
        a3.textContent = "Join";
        navBar.appendChild(a3);

        const a4 = document.createElement('a');
        a4.setAttribute("href", "#");
        a4.textContent = "Contact";
        navBar.appendChild(a4);
    } else if (window.innerWidth < 940 && document.querySelector('.navContainer').classList.contains('on') && document.querySelector('.navContainer').classList.contains('large')) {
        document.querySelector('.navContainer').classList.toggle('on');
        document.querySelector('.navContainer').classList.toggle('large');
        document.querySelector('nav').remove()
    }
}

window.addEventListener('resize', reportWindowSize);

window.addEventListener('DOMContentLoaded', reportWindowSize);


const dateToday = document.querySelector('.date');
const options = {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
};

dateToday.textContent = `${new Date().toLocaleDateString("en-US", options)}`;


const lastModified = document.querySelector('#lastModified');
lastModified.textContent = `Last Modification: ${document.lastModified}`


const date = new Date();
let year = date.getFullYear();
console.log(year);


document.querySelector('#currentYear').innerHTML = `&copy;${year} Rigby's Chamber of Commerce | Jacob Briggs <br> WDD 230 Project `

const dayOfWeek = date.getDay();

const banner = document.querySelector('.banner-meeting');

if (dayOfWeek === 1 || dayOfWeek === 2) {
    banner.style.display = "block";
} else {
    banner.style.display = "none";
}

let opacity = 0;
let fadeIn = true;
setInterval(() => {
    if (fadeIn) {
        opacity += 0.1;
        if (opacity >= 1) {
            fadeIn = false;
        }
    } else {
        opacity -= 0.1;
        if (opacity <= 0) {
            fadeIn = true;
        }
    }
    banner.style.opacity = opacity;
}, 100);

const temp = document.querySelector('.t').textContent;
const windSpeed = document.querySelector('.ws').textContent;
const windchill = document.querySelector('.wc')

let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windSpeed,0.16)) + (0.4275*temp*Math.pow(windSpeed,0.16)));

if (windSpeed >= 3 && temp <= 50) {
    windchill.textContent = chill;
}