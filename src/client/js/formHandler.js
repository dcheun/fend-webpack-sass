function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  Client.checkForName(formText);

  console.log("::: Form Submitted :::");
  fetch("http://localhost:8081/test")
    .then((res) => res.json())
    .then(function (res) {
      document.getElementById("results").innerHTML = res.message;
    });

  console.log("Making API Call to OpenWeatherMap");
  const API_KEY = atob("MDY5ZDc5Y2M0NGYwZTBhMjNlMjc0ZjBkNDJlYTRhZDU=");
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=94606&appid=${API_KEY}`
  )
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      const p = document.createElement("p");
      p.innerHTML = `Current Temp in Oakland: ${data.main.temp} C`;
      const results = document.getElementById("results");
      results.appendChild(p);
    });
}

export { handleSubmit };
