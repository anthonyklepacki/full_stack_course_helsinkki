import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios'

const Filter = (props) => {
    const country = props.country

    const [ countryWeather, setCountryWeather] = useState([])
    const [ countryWeatherData, setCountryWeatherData] = useState([])
    const params = {
        access_key: process.env.REACT_APP_API_KEY,
        query: props.country.name
      }
    
      useEffect(() => {
        axios.get('http://api.weatherstack.com/current', {params})
          .then(response => {
            const apiResponse = response.data;
            setCountryWeather(response.data.current)
            setCountryWeatherData(response.data.location)
            console.log(response.data)
            console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
          }).catch(error => {
            console.log(error);
          });
      },[])



    return (
            <div>
                <h1>{country.name}</h1>
                <p>capital {country.capital}</p>
                <p>population {country.population}</p>
                <h2>Languages</h2>
                <ul>
                    {country.languages.map(language =>
                        <li>
                            {language.name}
                        </li>)}
                </ul>
                <img src={country.flag} height="150" alt={`${country.name} flag`} />
                <h2>Weather in {countryWeatherData.name}</h2>
                <p><b>temperature:</b>{countryWeather.temperature} Celcius</p>
                <img src={countryWeather.weather_icons} height="50" alt={`${country.name} flag`} />
                    <p><b>wind: </b>{countryWeather.wind_speed} mph direction {countryWeather.wind_dir}</p>
            </div>
    )
}

export default Filter