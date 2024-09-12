
        // 2. Confetti rain
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

        // 3. Page rotate
        document.querySelector('.rotate-button').addEventListener('click', function() {
            document.body.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                document.body.style.transform = 'rotate(-360deg)';
            }, 2000);
        });

        // 6. Weather API
        async function fetchWeather() {
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Cesis,LV&appid=YOUR_API_KEY&units=metric');
            const data = await response.json();
            document.getElementById('box6').textContent = `Temperatūra Cēsīs: ${data.main.temp}°C, ${data.weather[0].description}`;
        }
        fetchWeather();

        // 7-9. DB Operations (Placeholder)
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
