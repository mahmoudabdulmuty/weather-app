const searchForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");

// update city UI
const updateUI = (data) => {
  // destructure properties
  const { weatherDets, cityDets } = data;

  details.innerHTML = `<div class="details text-muted text-center text-uppercase">
  <p class="my-3">${cityDets.EnglishName}</p>
  <p class="my-3 lead">${cityDets.Country.EnglishName}</p>
  <p class="my-3">${weatherDets.WeatherText}</p>
  <p class="my-3 display-4">
      <span>${weatherDets.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
  </p>
  </div>`;

  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }

  // update day/night img
  let timeSrc = weatherDets.IsDayTime ? "img/day.svg" : "img/night.svg";
  time.setAttribute("src", timeSrc);

  // update icon
  const iconSrc = `img/icons/${weatherDets.WeatherIcon}.svg`;
  icon.setAttribute("src", iconSrc);
};

// update city details via async/await
const updateCity = async (city) => {
  const cityDets = await getCityDets(city);
  const weatherDets = await getWeatherDets(cityDets.Key);

  return { cityDets, weatherDets };
};

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //get city value
  const seachValue = searchForm.location.value.trim();
  searchForm.reset();
  //update city value
  updateCity(seachValue)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
});
