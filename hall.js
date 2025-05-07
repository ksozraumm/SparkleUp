

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
