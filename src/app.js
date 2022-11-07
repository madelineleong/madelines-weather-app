function displayTemperature(response) {
  console.log(response.data.main.temp);
}

let apiKey = "2ff29bed3181c3526c35cc5408037f85";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Akron&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
