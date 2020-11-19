import React, { useContext, useState } from "react";
import Country from "./Country";
import Dropdown from "./Dropdown";
import Search from "./Search";
import { Link } from "react-router-dom";
import { Theme } from "../contexts/Theme";
import { usePaginatedQuery } from "react-query";

const fetchCountries = async (key, name) => {
  // if(!selected || selected === 'all'){
  //   const res = await fetch(
  //     "https://cors-anywhere.herokuapp.com/https://restcountries.eu/rest/v2/all"
  //   );
  //   return res.json();
  // }
  // if (selected === 'america' || selected === 'asia' || selected === 'europe' || selected === 'oceania') {
  //   const res = await fetch(
  //     `https://cors-anywhere.herokuapp.com/https://restcountries.eu/rest/v2/region/${selected}`
  //   );
  //   return res.json();
  // }
  // if (name) {
  //   const res = await fetch(
  //     `https://cors-anywhere.herokuapp.com/https://restcountries.eu/rest/v2/name/${name}`
  //   );
  //   return res.json();
  // }
  if (name) {
    const res = await fetch(
      `https://cors-anywhere.herokuapp.com/https://restcountries.eu/rest/v2/name/${name}`
    );
    return res.json();
  } else {
    const res = await fetch(
      "https://cors-anywhere.herokuapp.com/https://restcountries.eu/rest/v2/all"
    );
    return res.json();
  }
};

const Countries = () => {
  const { isLight, light, dark } = useContext(Theme);
  const theme = isLight ? light : dark;
  const [name, setName] = useState(null);
  const [selected, setSelect] = useState(null);
  // const [countries,setCountries] = useState(null);
  // useEffect(()=>{
  //   fetch('https://restcountries.eu/rest/v2/all').then(res=>res.json()).then(data=>setCountries(data));
  // },[]);

  const { resolvedData, status } = usePaginatedQuery(
    ["countries", name],
    fetchCountries
  );
  
  return (
    <>
      <main style={{ background: theme.ui, color: theme.fontColor }}>
        <div className="filter">
          <Search theme={theme} setName={(q) => setName(q)} />
          <Dropdown theme={theme} selected={selected} setSelect={setSelect} />
        </div>
        <div className="container">
          <div className="grid">
            {status === "loading" && <div>Loading...</div>}
            {status === "error" && <div>Error Fetching Data </div>}
            {status === "success" &&
              resolvedData.map((country) => {
                  
                return (
                  <Link
                    to={`/country/${country.alpha3Code}`}
                    key={country.alpha2Code}
                    className="card"
                  >
                    <Country country={country} theme={theme} />
                  </Link>
                )
                // if (selected) {
                  
                //   return (
                //     <Link
                //       to={`/country/${country.alpha3Code}`}
                //       key={country.alpha2Code}
                //       className="card"
                //     >
                //       <Country country={resolvedData.find(findCountriesByRegion(country,selected))} theme={theme} />
                //     </Link>
                //   )
                // } else {
                //   return (
                //     <Link
                //       to={`/country/${country.alpha3Code}`}
                //       key={country.alpha2Code}
                //       className="card"
                //     >
                //       <Country country={country} theme={theme} />
                //     </Link>
                //   );
                // }
              })}
            {/* {countries && countries.map(country => {
                return (
                  <Link to={`/country/${country.alpha3Code}`} key={country.alpha2Code}  className='card'>
                     <Country country={country} theme={theme}/>
                  </Link>
                )
              })} */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Countries;
