
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

async function fetchWeather() {
    try {
       
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Cesis,LV&appid=RKzjAkZ4Y537p2xD&units=metric');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        const weatherElement = document.getElementById('box6');
        weatherElement.textContent = `Temperatūra Cēsīs: ${data.main.temp}°C, ${data.weather[0].description}`;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        const weatherElement = document.getElementById('box6');
        weatherElement.textContent = 'Kļūda iegūstot laika prognozi.';
    }
}


fetchWeather();


    
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
