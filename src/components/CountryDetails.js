import React,{useContext} from "react";
import { usePaginatedQuery } from "react-query";
import {Link} from 'react-router-dom';
import { Theme } from '../contexts/Theme';


const fetchCountryDetails = async (key, code) => {
  const res = await fetch(
    `https://cors-anywhere.herokuapp.com/https://restcountries.eu/rest/v2/alpha/${code}`
  );
  return res.json();
};

const CountryDetails = (props) => {
  const  {isLight,light,dark} = useContext(Theme);
  const theme = isLight ? light:dark;
  const code = props.match.params.name;
  const sortArray = (array, idxStr) => {
    return array.map((array) => array[idxStr]).join(", ");
  };
  const { resolvedData, status } = usePaginatedQuery(
    ["country", code],
    fetchCountryDetails
  );
  //console.log(code, resolvedData);
  return (
    <section id="country-view" style={{background:theme.ui , color:theme.fontColor}}>
      <Link to="/" id="button-back" style={{background:theme.bgCard , color:theme.fontColor}}>
            <svg style={{fill:theme.fontColor}} width="18px" height="18px" viewbox="0 0 18 18" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(-1 0 0 1 18 0)"><path d="M4.5 0L4.5 1.5L9.45 1.5L0 10.95L1.05 12L10.5 2.55L10.5 7.5L12 7.5L12 0L4.5 0Z" transform="matrix(0.70710677 0.70710677 -0.70710677 0.70710677 9 0.514719)" fill-rule="evenodd" stroke="none" /></g></svg>
            Back
        </Link>
      <div id="country">
        {status === "loading" && <div>Loading...</div>}
        {status === "error" && <div>Error Fetching Data </div>}
        {status === "success" && (
          <>
            <div id="country-img">
              <img src={resolvedData.flag} alt={`${resolvedData.name} Flag`} />
            </div>
            <div id="country-panel">
              <h3>{resolvedData.name}</h3>
              <div id="country-panel-info">
                <div>
                  <p>
                    <span>Native Name: </span>
                    {resolvedData.nativeName}
                  </p>
                  <p>
                    <span>Population: </span>
                    {resolvedData.population
                      .toString()
                      .replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$&,")}
                  </p>
                  <p>
                    <span>Region: </span>
                    {resolvedData.region}
                  </p>
                  <p>
                    <span className="semi-bold">Sub Region: </span>
                    {resolvedData.subregion}
                  </p>
                  <p>
                    <span>Capital: </span>
                    {resolvedData.capital}
                  </p>
                </div>
                <div>
                  <p>
                    <span>Top Level Domain: </span>
                    {resolvedData.topLevelDomain[0]}
                  </p>
                  <p>
                    <span>Currencies: </span>
                    {sortArray(resolvedData.currencies, "name")}
                  </p>
                  <p>
                    <span>Languages: </span>
                    {sortArray(resolvedData.languages,'name')}
                  </p>
                </div>
              </div>
              <div id="countries-border">
                <p>
                  <span>Border Countries: </span>
                  <Link className="button-border-country">
                     
                  </Link>
                  
                </p>
              </div>
            </div>
          </>
        )}
        {/* <div id="country-img">
                <img src={resolvedData.flag} alt={`${resolvedData.name} Flag`}/>
            </div>
            <div id="country-panel">
                <h2>{resolvedData.name}</h2>
                <div id="country-panel-info">
                    <div>
                        <p><span className="semi-bold">Native Name: </span>{resolvedData.nativeName}</p>
                        <p><span className="semi-bold">Population: </span>{resolvedData.population.toString().replace(/\d{1,3}(?=(\d{3})+(?!\d))/g , "$&,")}</p>
                        <p><span className="semi-bold">Region: </span>{resolvedData.region}</p>
                        <p><span className="semi-bold">Sub Region: </span>{resolvedData.subregion}</p>
                        <p><span className="semi-bold">Capital: </span>{resolvedData.capital}</p>
                    </div>
                    <div>
                        <p><span className="semi-bold">Top Level Domain: </span>{resolvedData.topLevelDomain[0]}</p>
                        <p><span className="semi-bold">Currencies: </span>{sortArray(resolvedData.currencies,'name')}</p>
                        <p><span className="semi-bold">Languages: </span></p>
                    </div>
                </div>
                <div id="countries-border">
                    <p><span className="semi-bold">Border Countries: </span>{sortArray(resolvedData.languages,'name')}</p>
                </div>
            </div> */}
      </div>
    </section>
  );
};

export default CountryDetails;
