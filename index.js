const container = document.querySelector('.container');
const pesquisa = document.querySelector('.pesquisa button');
const prev = document.querySelector('.prev');
const desc = document.querySelector('.desc');
const error404 = document.querySelector('.nao-encontrado');

search.addEventListener('click', () =>{

    const APIKEY ='c2121e48890591b152c235cdcf54c2d5';
    const city = document.querySelector('.pesquisa input').value;

    if(city=== '')
        return;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {

            if(json.cod === '404'){
                container.style.heigh = '400px';
                prev.style.style.display = 'none';
                desc.style.display = 'block';
                error404.classList.add('fadeIn');

                return
            };

            desc.style.display = 'none';
            error404.classList.remove('fadeIn');

            const image = document.querySelector('.prev img');
            const temperature = querySelector('.prev .temperatura');
            const desc = document.querySelector('prev .desc');
            const umidade  = document.querySelector('.desc .umidade');
            const vento  = document.querySelector('.desc .vento');

            switch(json.weather [0].main){

                case 'Clear': 
                image.src = 'img/clear.png';
                break;

                case 'Rain': 
                image.src = 'img/rain.png';
                break;

                case 'Snow': 
                image.src = 'img/snow.png';
                break;

                case 'Clouds':
                image.src = 'img/clouds.png';
                break;

                case 'Haze': 
                image.src = 'img/haze.png';
                break;

                default:
                    image.src = '';
            };

            temperatura.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            desc.innerHTML = `${parseInt(json.Weather[0].desc)}`;
            umidade.innerHTML = `${parseInt(json.main.umidade)}%`;
            vento.innerHTML = `${parseInt(json.main.speed)}Km/h`;

            weatherBox.style.display = '';
            desc.style.display = '';
            prev.classList.add('fadeIn');
            desc.classList.add('fadeIn');
            container.style.heigh = '590px';

        });

});