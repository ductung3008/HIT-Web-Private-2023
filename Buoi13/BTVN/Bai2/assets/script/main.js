const apiKey = "04ffc0879f0208a84d26a1dcc123e3cd";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const btn = $('.js-weather-btn');
const weather_app = $('.js-weather-app');
const weather_info = $('.js-weather-info');
const wind_directions = ["North", "North East", "East", "South East", "South", "South West", "West", "North West"];

const getLocation = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`);
        if (response.ok) {
            const data = await response.json();

            if (data.length > 0) {
                const viName = data[0].local_names?.vi;
                const location = { name: viName !== undefined ? viName : data[0].name, lat: data[0].lat, lon: data[0].lon };
                return location;
            }
            else {
                throw new Error('Not found!');
            }
        }
        else {
            throw new Error('API error!');
        }
    }
    catch (err) {
        alert(err);
    }
}

const getWeather = async (city) => {
    try {
        const location = await getLocation(city);
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&lang=vi&units=metric&appid=${apiKey}`);
        if (response.ok) {
            const data = await response.json();
            return { data, name: location.name };
        }
        else {
            throw new Error('API error!');
        }
    }
    catch (err) {
        throw err;
    }
};

const unixToUTC = (unix) => {
    const date = new Date(unix * 1000);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
};

document.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        e.preventDefault();
        btn.click();
    }
})

btn.addEventListener('click', async () => {
    const city = $('input').value;
    $('input').value = '';
    try {
        const { data, name } = await getWeather(city);
        const currentTime = new Date(new Date().getTime() + data.timezone * 1000);
        const wd = currentTime.toLocaleDateString('en-US', { weekday: 'long' });
        const month = currentTime.toLocaleDateString('en-US', { month: 'long' });
        const day = currentTime.getUTCDate();
        const year = currentTime.getUTCFullYear();
        const hours = currentTime.getUTCHours().toString().padStart(2, '0');
        const minutes = currentTime.getUTCMinutes().toString().padStart(2, '0');
        const seconds = currentTime.getUTCSeconds().toString().padStart(2, '0');
        const time = `${hours}:${minutes}:${seconds}`;

        const weather = `<p class="font-medium text-5xl">${name}</p>
                            <div class="h-60 w-full flex justify-center items-center">
                                <img class="size-60" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt="">
                            </div>
                            <p class="font-medium text-6xl">${data.main.temp.toFixed()}<sup>°</sup>C</p>
                            <p class="mt-3 text-2xl">${data.weather[0].main}</p>
                            <p class="mb-3 text-2xl">${data.weather[0].description}</p>
                            <p class="border-[2px] border-[#efefef] mx-32"></p>
                            <div class="my-10 text-xl">
                                <p class="mb-2">${day} - ${month} - ${year}</p>
                                <p>${wd}, ${time}</p>
                        </div>`
        weather_app.innerHTML = weather;

        const sunrise = unixToUTC(data.sys.sunrise);
        const sunset = unixToUTC(data.sys.sunset);
        let rain1h = 0, rain3h = 0;
        if (data.rain) {
            rain1h = isNaN(data.rain['1h']) ? 0 : data.rain['1h'];
            rain3h = isNaN(data.rain['3h']) ? 0 : data.rain['3h'];
        }
        const info = `<div class="grid grid-cols-3 grid-rows-3 gap-8">
                        <div class="bg-[#748cf1] text-white rounded-xl p-8">
                            <p class="text-xl">Feels Like<i class="fa-regular fa-temperature-half ml-2"></i></p>
                            <p class="font-medium text-4xl mt-2">${data.main.feels_like.toFixed()}<sup>°</sup>C</p>
                        </div>
                        <div class="bg-[#748cf1] text-white rounded-xl p-8">
                            <p class="text-xl">Temperature History<i class="fa-solid fa-temperature-list ml-2"></i></p>
                            <p class="font-medium text-4xl mt-2"><i class="fa-regular fa-temperature-arrow-up text-red-500 mr-2"></i>${data.main.temp_max.toFixed()}<sup>°</sup>C</p>
                            <p class="font-medium text-4xl mt-2"><i class="fa-regular fa-temperature-arrow-down text-green-400 mr-2"></i>${data.main.temp_min.toFixed()}<sup>°</sup>C</p>
                        </div>
                        <div class="bg-[#748cf1] text-white rounded-xl p-8">
                            <p class="text-xl">Humidity<i class="fa-solid fa-droplet-percent ml-2"></i></p>
                            <p class="font-medium text-4xl mt-2">${data.main.humidity} %</p>
                        </div>
                        <div class="bg-[#748cf1] text-white rounded-xl p-8">
                            <p class="text-xl">Pressure</p>
                            <p class="font-medium text-4xl mt-2">${data.main.pressure} hPa</p>
                        </div>
                        <div class="bg-[#748cf1] text-white rounded-xl p-8">
                            <p class="text-xl">Visibility<i class="fa-solid fa-eye ml-2"></i></p>
                            <p class="font-medium text-4xl mt-2">${data.visibility / 1000} km</p>
                        </div>
                        <div class="bg-[#748cf1] text-white rounded-xl p-8">
                            <p class="text-xl">Wind<i class="fa-solid fa-wind ml-2"></i></p>
                            <p class="font-medium text-4xl my-2">${data.wind.speed} m/s</p>
                            <p>${wind_directions[Math.round(Math.round(((data.wind.deg + 360) % 360) / 45 % 8))]}<i class="fa-solid fa-arrow-down-long ml-2" style="transform: rotate(${data.wind.deg}deg);"></i></p>
                        </div>
                        <div class="bg-[#748cf1] text-white rounded-xl p-8">
                            <p class="text-xl">Cloud<i class="fa-solid fa-cloud ml-2"></i></p>
                            <p class="font-medium text-4xl mt-2">${data.clouds.all} %</p>
                        </div>
                        <div class="bg-[#748cf1] text-white rounded-xl p-8">
                            <p class="text-xl mb-2">Sun<i class="fa-sharp fa-solid fa-sun ml-2"></i></p>
                            <div class="text-2xl">
                                <p><i class="fa-solid fa-sunrise mr-2 mb-2"></i>Rise ${sunrise}</p>
                                <p><i class="fa-solid fa-sunset mr-2"></i></i>Set ${sunset}</p>
                            </div>
                        </div>
                        <div class="bg-[#748cf1] text-white rounded-xl p-8">
                            <p class="text-xl mb-2">Rain<i class="fa-solid fa-cloud-rain ml-2"></i></p>
                            <div class="text-2xl">
                                <p class="mb-2">1h: ${rain1h} mm</p>
                                <p>3h: ${rain3h} mm</p>
                            </div>
                        </div>
                    </div>`;
        weather_info.innerHTML = info;
    }
    catch (error) {
        alert(error.message);
    }
});