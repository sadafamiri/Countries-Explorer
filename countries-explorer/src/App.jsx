import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import CountryCard from "./components/CardCountries";

function App() {
  const[countries,setCountries] = useState([])
  const[loading,setLoading] = useState(false)
  const[error,setError] =useState(null)
  const[search,setSearch] =useState("")
  const[region,setRegion] = useState("all")
  const trimmedText = search.trim();
  useEffect(() => {
    const controller = new AbortController();

    async function fetchCountries() {
      setLoading(true);
      setError(null);

      try {
        let url = "";

        if (trimmedText.length >= 2) {
          url = `https://restcountries.com/v3.1/name/${trimmedText}?fields=name,flags,region,population`;
        } else if (region !== "all") {
          url = `https://restcountries.com/v3.1/region/${region}?fields=name,flags,region,population`;
        } else {
          url = `https://restcountries.com/v3.1/all?fields=name,flags,region,population`;
        }

        const res = await fetch(url, {
          signal: controller.signal,
        });

        if (!res.ok) {
          if (res.status === 404) {
            setCountries([]);
            return;
          }
          throw new Error("Something went wrong  fetching countries");
        }

        const data = await res.json();
        setCountries(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
          setCountries([]);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchCountries();

    return () => controller.abort();
  }, [trimmedText, region]);
  return (
  <div style={{ padding: "15px" }}>
    <h1>Countries Explorer</h1>

    <SearchBar
      search={search}
      setSearch={setSearch}
      region={region}
      setRegion={setRegion}
    />
<div className="countries">
  {countries.map((country) => (
    <CountryCard
      key={country.name.common}
      country={country}
    />
  ))}
</div>

  </div>
);
}

export default App
