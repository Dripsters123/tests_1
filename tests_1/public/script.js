  // 1. Confetti rain
  function createConfetti() {
    const box2 = document.getElementById('box2');
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        box2.appendChild(confetti);
    }
}
createConfetti();

// 2. Button rotation
let isRotated = false;
document.querySelector('.rotate-button').addEventListener('click', function() {
    if (!isRotated) {
        document.body.classList.add('rotate-cw');
    } else {
        document.body.classList.remove('rotate-cw');
        document.body.classList.add('rotate-ccw');
    }
    isRotated = !isRotated;
    setTimeout(() => {
        document.body.classList.remove('rotate-ccw');
    }, 2000);
});

// 3. Fetch Weather Data
async function fetchWeather() {
    try {
        const apiKey = '5532ce34ad72e098639dcaff6c01dedf'; // Your valid OpenWeatherMap API key
        const city = 'Cēsis'; // Ensure this matches OpenWeatherMap's supported format
        
        // Fetch weather data
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},LV&appid=${apiKey}&units=metric`);
        
        if (!response.ok) {
            // Log the actual error code and text for better debugging
            throw new Error(`Network response was not ok: ${response.status} - ${response.statusText}`);
        }
        
        // Parse the weather data
        const data = await response.json();
        
        // Extract the temperature and weather description
        const temp = data.main.temp;
        const description = data.weather[0].description;
        
        // Display the weather information in box6
        const weatherElement = document.getElementById('box6');
        weatherElement.textContent = `Temperatūra Cēsīs: ${temp}°C, ${description}`;
        
    } catch (error) {
        // Log the actual error message for better debugging
        console.error('There has been a problem with your fetch operation:', error);
        const weatherElement = document.getElementById('box6');
        weatherElement.textContent = 'Kļūda iegūstot laika prognozi.';
    }
}

// Ensure fetchWeather is called when the page loads
window.onload = function() {
    fetchWeather();
}

// 4. User form submissions
document.getElementById('add-user-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Lietotājs pievienots!');
});
document.getElementById('edit-user-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Lietotājs rediģēts!');
});
document.getElementById('delete-user-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Lietotājs dzēsts!');
});

// 5. Links in box5
document.querySelectorAll('#box5 .link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); 
        document.querySelectorAll('#box5 .link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        setTimeout(() => {
            window.location.href = this.href;
        }, 100);
    });
});