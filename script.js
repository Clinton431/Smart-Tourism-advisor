// Get the search button element
const searchButton = document.getElementById("searchButton");

// Add click event listener to the search button
searchButton.addEventListener("click", function() {
    // Get the value of the search input
    const searchTerm = document.getElementById("searchInput").value;
    
    // Check if search term is not empty
    if (searchTerm.trim() !== "") {
        // Redirect to details page with search term as query parameter
        window.location.href = "details.html?q=" + encodeURIComponent(searchTerm);
    }
});
// Example data for temperature over 7 days
const temperatureData = [20, 22, 25, 24, 23, 21, 20];

// Example data for days of the week
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// Get the canvas element
const ctx = document.getElementById("weather-chart").getContext("2d");

// Create the chart
const weatherChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: daysOfWeek,
        datasets: [{
            label: 'Temperature (°C)',
            data: temperatureData,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
