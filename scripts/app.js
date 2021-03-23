const apiKey = 'K29Y9sYExREmqGRcIYuGcO7wRtoOuRPi';

// get city function
const getCity = async (city) => {
  const baseUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${apiKey}&q=${city}`;

  const response = await fetch(baseUrl + query);
  
  const cityData = await response.json();
  return cityData[0];
};
getCity('cairo')
  .then(cityData => getWeatherDetails(cityData.Key))
  .then(weatherDetails => console.log(weatherDetails))
  .catch(err => console.log(err));

// get weather-details function
const getWeatherDetails = async(locationId)=>{

    const baseUrl = 'http://dataservice.accuweather.com/currentconditions/v1/'

    const query = `${locationId}?apikey=${apiKey}`

    const response = await fetch(baseUrl + query)
    const weatherDetails = await response.json()
    return weatherDetails[0]

}
