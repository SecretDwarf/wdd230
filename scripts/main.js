let date = new Date();
let year = date.getFullYear();

document.querySelector('.year').innerHTML = `${year}`;

let currentDate = document.lastModified;
document.querySelector('modified').textContent = `Last updated: ${currentDate}`;