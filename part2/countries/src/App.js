import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Filter from './components/Filter'
import CountryInfo from './components/CountryInfo'
import Button from './components/Button'

const App = () => {
  

  const [ countries, setCountries] = useState([]) 
  const [ countryFilter, setCountryFilter] = useState('')

  useEffect(() => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
      .then(response =>{
        console.log(response.data)
        setCountries(response.data)
      }
    )
  },[])

  const countriesToShow = (countryFilter==='')
        ? countries
        : countries.filter(country => String(country.name).includes(countryFilter))


  const handleCountryFilterChange = (event) => {
    console.log(event.target.value)
    setCountryFilter(event.target.value)
  }

  const handleShowCountry = (name) => {
    console.log(name)
    setCountryFilter(name)
  }



  return (


          

    <div>
      <Filter onChangeHandler={handleCountryFilterChange} />  
    {(() => {
        

      if (countriesToShow.length >= 10) {
        return (
          <div><p> Too many matches, specify another filter</p></div>
        )
      } else if (countriesToShow.length === 1)
        return (
          <div>
            <CountryInfo country={countriesToShow[0]}/>
          </div>
        )
      else {
        return (
          <div>{countriesToShow.map(country => <p>{country.name} 
              <Button text='show' 
                      handleClick={() => handleShowCountry(country.name)}
                      />
            </p>)}</div>
        )
      }
    })()}
  </div>
  )
}

export default App;
