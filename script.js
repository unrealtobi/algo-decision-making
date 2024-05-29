// script.js

// Leap Year Checker
function checkLeapYear() {
    const year = parseInt(document.getElementById('year').value);
    const result = document.getElementById('leap-year-result');

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        result.textContent = year + " is a leap year.";
    } else {
        result.textContent = year + " is not a leap year.";
    }
}

// Ticket Pricing
function calculateTicketPrice() {
    const age = parseInt(document.getElementById('age').value);
    const priceElement = document.getElementById('ticket-price');

    if (age <= 12) {
        priceElement.textContent = "Ticket Price: $10";
    } else if (age >= 13 && age <= 17) {
        priceElement.textContent = "Ticket Price: $15";
    } else {
        priceElement.textContent = "Ticket Price: $20";
    }
}

// Weather Clothing Adviser
function adviseClothing() {
    const temperature = parseInt(document.getElementById('temperature').value);
    const rain = document.getElementById('rain').value.toLowerCase();
    const adviceElement = document.getElementById('clothing-advice');

    if (temperature >= 70) {
        adviceElement.textContent = "Wear light clothing.";
    } else if (temperature >= 50 && rain === 'no') {
        adviceElement.textContent = "Wear a light jacket.";
    } else {
        adviceElement.textContent = "Wear a warm jacket and take an umbrella.";
    }
}
