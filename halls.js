
const halls = [
    {
        name: 'Malaysia International Trade and Exhibition Centre',
        location: 'Kuala Lumpur',
        image: 'img/plananevent/MITEC_MAIN.jpeg',
        description: 'A premier venue for large-scale events and exhibitions.',
    },
    {
        name: 'Mid Valley Exhibition Centre',
        location: 'Kuala Lumpur',
        image: 'img/plananevent/MVEC_MAIN.jpg',
        description: 'Versatile space suitable for conferences and exhibitions.',
    },
    {
        name: 'Putrajaya International Convention Centre',
        location: 'Putrajaya',
        image: 'img/plananevent/PICC_MAIN.webp',
        description: 'Modern facilities for international conferences and events.',
    },
    {
        name: 'Sultan Ahmad Shah International Convention Center',
        location: 'Shah Alam',
        image: 'img/plananevent/SASICC_MAIN.jpg',
        description: 'State-of-the-art venue for various events and conventions.',
    },
    {
        name: 'Bukit Kemuning Convention Centre',
        location: 'Selangor',
        image: 'img/plananevent/BKCC_MAIN.jpeg',
        description: 'Ideal for corporate events and seminars.',
    },
    {
        name: 'Genting International Convention Centre',
        location: 'Pahang',
        image: 'img/plananevent/GRCC_MAIN.jpeg',
        description: 'Scenic venue offering a unique event experience.',
    },
    {
        name: 'Kuala Lumpur Convention Centre',
        location: 'Kuala Lumpur',
        image: 'img/plananevent/KLCC_MAIN.jpeg',
        description: 'World-class facilities in the heart of the city.',
    },
    {
        name: 'Mines International Exhibition & Convention Centre',
        location: 'Selangor',
        image: 'img/plananevent/MICC_MAIN.jpeg',
        description: 'Spacious venue for exhibitions and conventions.',
    },
    {
        name: 'Melaka International Trade Centre',
        location: 'Melaka',
        image: 'img/plananevent/MITC_MAIN.jpeg',
        description: 'Modern facilities for trade events and exhibitions.',
    }
];


function getRandomHalls(arr, num) {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}


function displayRandomHalls() {
    const randomHalls = getRandomHalls(halls, 4); 
    const grid = document.getElementById('random-halls');
    grid.innerHTML = ''; 

    randomHalls.forEach(hall => {
        const hallItem = document.createElement('div');
        hallItem.classList.add('hall-item');
        hallItem.innerHTML = `
            <img src="${hall.image}" alt="${hall.name}">
            <h3>${hall.name}</h3>
            <p>${hall.location}</p>
            <p>${hall.description}</p>
        `;
        grid.appendChild(hallItem);
    });
}


function flipContrast() {
    
    document.body.classList.toggle("darkmode");
}


window.onload = displayRandomHalls;


function viewMore(slug) {
    const venue = halls.find(hall => hall.slug === slug);

    if (venue) {
        document.getElementById('modal-venue-name').textContent = venue.name;
        document.getElementById('modal-venue-description').textContent = venue.description;
        document.getElementById('modal-venue-location').textContent = venue.location;
        document.getElementById('modal-venue-price').textContent = venue.pricePerPax;
        document.getElementById('modal-venue-maxPax').textContent = venue.maxPax;

        document.getElementById('venue-modal').style.display = 'block'; 
    }
}

function searchVenues() {
    const eventTypeSelect = document.getElementById('event-type');
    const locationSelect = document.getElementById('location');
    const resultsContainer = document.getElementById('results');

    const selectedType = eventTypeSelect.value;
    const selectedLocation = locationSelect.value;

    resultsContainer.innerHTML = ''; 
    const filteredHalls = halls.filter(hall =>
        (selectedType ? hall.type.includes(selectedType) : true) &&
        (selectedLocation ? hall.location === selectedLocation : true)
    );

    if (filteredHalls.length > 0) {
        filteredHalls.forEach(hall => {
            const venueDiv = document.createElement('div');
            venueDiv.classList.add('venue');
            venueDiv.style.backgroundImage = `url(${hall.image})`;
            venueDiv.innerHTML = `
                <h3>${hall.name}</h3>
                <p>${hall.locale} | ${hall.location}</p>
                <p>MYR ${hall.pricePerPax} per pax</p>
                <p>Max Pax: ${hall.maxPax}</p>
                <button class="view-more-button" onclick="viewMore('${hall.slug}')">View More</button>
            `;
            resultsContainer.appendChild(venueDiv);
        });
    } else {
        resultsContainer.innerHTML = '<p>No venues match your criteria.</p>';
    }
}

function populateDropdowns() {
    const eventTypeSelect = document.getElementById('event-type');
    const locationSelect = document.getElementById('location');

    const uniqueTypes = [...new Set(halls.flatMap(hall => hall.type))];
    const uniqueLocations = [...new Set(halls.map(hall => hall.location))];

   
    uniqueTypes.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        eventTypeSelect.appendChild(option);
    });

  
    uniqueLocations.forEach(location => {
        const option = document.createElement('option');
        option.value = location;
        option.textContent = location;
        locationSelect.appendChild(option);
    });
}


function searchVenues() {
    const eventTypeSelect = document.getElementById('event-type');
    const locationSelect = document.getElementById('location');
    const resultsContainer = document.getElementById('results');

    const selectedType = eventTypeSelect.value;
    const selectedLocation = locationSelect.value;

    resultsContainer.innerHTML = ''; 


    const filteredHalls = halls.filter(hall =>
        (selectedType ? hall.type.includes(selectedType) : true) &&
        (selectedLocation ? hall.location === selectedLocation : true)
    );

    if (filteredHalls.length > 0) {
        filteredHalls.forEach(hall => {
            const venueDiv = document.createElement('div');
            venueDiv.classList.add('venue');
            venueDiv.style.backgroundImage = `url(${hall.image})`;
            venueDiv.innerHTML = `
                <h3>${hall.name}</h3>
                <p>${hall.locale} | ${hall.location}</p>
                <p>MYR ${hall.pricePerPax} per pax</p>
                <p>Max Pax: ${hall.maxPax}</p>
                <button class="view-more-button" onclick="viewMore('${hall.slug}')">View More</button>
            `;
            resultsContainer.appendChild(venueDiv);
        });
    } else {
        resultsContainer.innerHTML = '<p>No venues match your criteria.</p>';
    }
}


function viewMore(slug) {
    const venue = halls.find(hall => hall.slug === slug);

    if (venue) {
        document.getElementById('modal-venue-name').textContent = venue.name;
        document.getElementById('modal-venue-description').textContent = venue.description;
        document.getElementById('modal-venue-location').textContent = venue.location;
        document.getElementById('modal-venue-price').textContent = venue.pricePerPax;
        document.getElementById('modal-venue-maxPax').textContent = venue.maxPax;

        document.getElementById('venue-modal').style.display = 'block'; 
    }
}


function closeModal() {
    document.getElementById('venue-modal').style.display = 'none'; 
}


function init() {
    populateDropdowns();


    document.getElementById('search-btn').addEventListener('click', searchVenues);


    document.querySelector('.close').addEventListener('click', closeModal);
}


document.addEventListener('DOMContentLoaded', init);
