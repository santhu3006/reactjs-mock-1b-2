const CountriesList = props => {
  const {details, addVisitedCountry} = props
  const {id, name, isVisited} = details

  const countryText = isVisited ? 'Visited' : 'visit'

  const addCountry = () => {
    addVisitedCountry(id)
  }

  return (
    <li className="country-list-item">
      <p className="country-name">{name}</p>
      {isVisited === true ? (
        <p className="paragraphS">{countryText}</p>
      ) : (
        <button className="button" type="button" onClick={addCountry}>
          {countryText}
        </button>
      )}
    </li>
  )
}

export default CountriesList
