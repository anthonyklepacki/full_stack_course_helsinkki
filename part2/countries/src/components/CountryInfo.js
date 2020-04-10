import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios'

const Filter = (props) => {
    const country = props.country
    return (
        <form>
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
            </div>
        </form>
    )
}

export default Filter