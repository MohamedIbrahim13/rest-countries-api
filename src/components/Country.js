import React from 'react'

const Country = ({country,theme}) => {
  return (
    <div className='card'>
      <div className='card-img'><img src={country.flag} alt={country.name}/></div>
        <div className='card-text' style={{background:theme.bgCard , color:theme.fontColor}}>
            <h4>{country.name}</h4>
            <p><span>Population:</span>{country.population.toString().replace(/\d{1,3}(?=(\d{3})+(?!\d))/g , "$&,")}</p>
            <p><span>Region:</span>{country.region}</p>
            <p><span>Capital:</span>{country.capital}</p>
      </div>
    </div>
  )
}

export default Country;

