
function sendLocationRequest() {
    var location = document.getElementById("location").value;
    var apiKey = "8bf79beca03d2e29dfc873324ae367f9";
  
    if (location.trim() === "") {
      alert("Enter a location.");
      return;
    }
  
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          showWeatherData(xhr.responseText);
        } else {
          alert("Error fetching weather data. Please try again.");
        }
      }
    };
  
    xhr.open("GET", `https://api.weatherstack.com/current?access_key=${apiKey}&query=${location}&units=m`, true);
    xhr.send();
  }
  
  function showWeatherData(response) {
    var outputDiv = document.getElementById("weather-result");
    outputDiv.innerHTML = "";
  
    try {
      var weatherData = JSON.parse(response);
  
      if (weatherData.current) {
        var temperature = weatherData.current.temperature;
        var description = weatherData.current.weather_descriptions[0];
  
        outputDiv.textContent = `Temperature: ${temperature}°C, Description: ${description}`;
      } else {
        outputDiv.textContent = "Error: No valid weather data received";
      }
    } catch (error) {
      outputDiv.textContent = "Error parsing weather data.";
      console.error(error); // Log the error to the console for debugging
    }
  }
  