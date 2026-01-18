const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const cityId = 1850144; // 東村山市の都市IDを設定

function getWeatherInfo(apiKey) {
    const url = `${apiUrl}?id=${cityId}&appid=${apiKey}&lang=ja&units=metric`;

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;
            return {
                weatherDescription,
                temperature,
                humidity,
                windSpeed
            };
        })
        .catch(error => {
            console.error('天気情報の取得に失敗しました:', error);
            return null;
        });
}

// apiKeyを外部ファイルから読み込む
const script = document.createElement('script');
script.src = './js/AI/api.js';
script.onload = function () {
    getWeatherInfo(apiKey)
        .then(weatherData => {
            if (weatherData) {
                const weatherMessage = `天気予報をお知らせします。<br>天気: ${weatherData.weatherDescription}<br>気温: ${weatherData.temperature}℃<br>湿度: ${weatherData.humidity}%<br>風速: ${weatherData.windSpeed}m/s`;
                addMessage('AI', weatherMessage);
            } else {
                console.error('天気情報を取得できませんでした。');
            }
        });
};

function onResize() {
    const element = document.getElementById('example-element'); // 例えば、要素のIDが 'example-element' の場合
    if (element) {
        // 要素が取得された場合の処理
        element.classList.add('new-class');
    } else {
        console.error('要素が存在しません');
    }
}
