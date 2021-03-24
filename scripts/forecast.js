const apiKey = 'f6MwRmUAtFHFk7UCOiGT6XV2Egf543O9';

// get city function
const getCityDets = async (city) => {
  const baseUrl =
    "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${apiKey}&q=${city}`;

  const response = await fetch(baseUrl + query);

  const cityData = await response.json();
  return cityData[0];
};

// get weather-details function
const getWeatherDets = async (locationId) => {
  const baseUrl = "http://dataservice.accuweather.com/currentconditions/v1/";

  const query = `${locationId}?apikey=${apiKey}`;

  const response = await fetch(baseUrl + query);
  const weatherDetails = await response.json();
  return weatherDetails[0];
};
