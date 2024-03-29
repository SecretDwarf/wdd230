async function fetchData() {
    const response = await fetch("https://secretdwarf.github.io/wdd230/chamber/json/directory.json");
    const data = await response.json();
    createTable(data.business);
    return data.business;
}

function createCard(business) {
    const card = document.createElement('div');
    card.classList.add('card');

    // const image = document.createElement('img');
    // image.src = business.image;
    // image.alt = business.name;
    // card.appendChild(image);

    // Add an image placeholder element
    const placeholder = document.createElement('div');
    placeholder.classList.add('card-image-placeholder');
    card.appendChild(placeholder);

    // Add an intersection observer for the image
    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Load the image and remove the placeholder
                const image = new Image();
                image.src = business.image;
                image.alt = business.name;
                image.classList.add('card-image');
                image.addEventListener('load', () => {
                    placeholder.replaceWith(image);
                });
                io.disconnect();
            }
        });
    });
    io.observe(placeholder);

    const body = document.createElement('div');
    body.classList.add('card-body');

    const title = document.createElement('div');
    title.classList.add('card-title');
    title.textContent = business.name;
    body.appendChild(title);

    const address = document.createElement('div');
    address.classList.add('card-text');
    address.textContent = business.address;
    body.appendChild(address);

    const phone = document.createElement('div');
    phone.classList.add('card-text');
    phone.textContent = business.phone;
    body.appendChild(phone);

    const webUrl = document.createElement('a');
    webUrl.classList.add('card-link');
    webUrl.textContent = business['web-url'];
    webUrl.href = business['web-url'];
    webUrl.target = '_blank';
    body.appendChild(webUrl);

    card.appendChild(body);

    return card;
}

async function loadCards() {
    const cardsContainer = document.querySelector('.cards');
    const businesses = await fetchData();

    businesses.forEach(business => {
        const card = createCard(business);
        cardsContainer.appendChild(card);
    });
}

loadCards();

function createTable(data) {
    data.forEach((business) => {
        let tr = document.createElement('tr');
        let td_name = document.createElement('td');
        let td_address = document.createElement('td');
        let td_phone = document.createElement('td');
        let td_url = document.createElement('td');

        td_name.textContent = `${business.name}`;
        td_address.textContent = business.address;
        td_phone.textContent = business.phone;
        td_url.textContent = business['web-url'];


        tr.appendChild(td_name);
        tr.appendChild(td_address);
        tr.appendChild(td_phone);
        tr.appendChild(td_url);

        document.querySelector('table').appendChild(tr);

    })
}

const cardsContainer = document.querySelector('.cards');
const table = document.querySelector('table');

// Show cards by default
cardsContainer.style.display = 'flex';
table.style.display = 'none';

// Add event listener to view icons
document.querySelector('#cards').addEventListener('click', function() {
    cardsContainer.style.display = 'flex';
    table.style.display = 'none';
});

document.querySelector('#list').addEventListener('click', function() {
    cardsContainer.style.display = 'none';
    table.style.display = 'table';
});