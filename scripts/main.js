let date = new Date();
let year = date.getFullYear();

// document.querySelector('h1').innerHTML = `${year} &copy`;

let currentdate = document.lastModified;
document.querySelector('div').textContent = `Last updated: ${currentdate} &copy ${year}`;
/* test test */ 