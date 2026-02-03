export default function CardCountries({ country }){
  return (
    <div className="card">
      <img src={country.flags.svg} alt={country.name.common} />
      <h3>{country.name.common}</h3>
      <p>Region: {country.region}</p>
      <p>Population: {country.population.toLocaleString()}</p>
    </div>
  );
}
