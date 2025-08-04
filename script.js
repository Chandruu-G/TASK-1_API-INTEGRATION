async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "YOUR_API_KEY"; // Replace with a real key from https://www.weatherapi.com/
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    document.getElementById("weatherResult").classList.remove("hidden");
    document.getElementById("cityName").textContent = `${data.location.name}, ${data.location.country}`;
    document.getElementById("condition").textContent = `Condition: ${data.current.condition.text}`;
    document.getElementById("temperature").textContent = `Temperature: ${data.current.temp_c}°C`;
    document.getElementById("humidity").textContent = `Humidity: ${data.current.humidity}%`;
    document.getElementById("wind").textContent = `Wind: ${data.current.wind_kph} km/h`;

  } catch (error) {
    alert("Error: " + error.message);
    document.getElementById("weatherResult").classList.add("hidden");
  }
}
