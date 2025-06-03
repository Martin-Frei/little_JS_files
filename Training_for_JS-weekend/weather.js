async function getCurrentWeather(params) {
  let city = document.getElementById("city").value.trim();
  let apiKey = "80d59c0f8e95d61f7caba4ee90b6db63";
  let url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  document.getElementById("current-weather").innerHTML = "";

  try {
    let response = await fetch(url);
    let data = await response.json();
    if (!response.ok) {
      document.getElementById(
        "current-weather"
      ).innerHTML = `<p> City not found !!</p>`;
      return;
    }
    let iconUrl =`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    document.getElementById(
      "current-weather"
    ).innerHTML = ` <h3> ${data.name}</h3> 
                    <h4>Temp:${data.main.temp}°C</h4>
                    <img src ="${iconUrl}" alt="${data.weather[0].description}">
                    <h4>Condition: ${data.weather[0].main}</h4>
                    <h4>Wind Speed: ${data.wind.speed}</h4>`;
  } catch (error) {
    document.getElementById(
        "current-weather"
      ).innerHTML = `<p> Error fetching the Data</p>`;
  }
}
