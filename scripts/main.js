let date = new Date();
let year = date.getFullYear();
let currentDate = date.toLocaleString();

document.querySelector('.year').innerHTML = `${year}`;
document.querySelector('modified').textContent = currentDate;