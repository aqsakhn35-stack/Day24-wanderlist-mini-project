const regions = ['All', 'Asia', 'Europe', 'Americas', 'Africa', 'Oceania']

function RegionFilter({ selectedRegion, onSelectRegion }) {
  return (
    <div className="region-filter">
      {regions.map((region) => (
        <button
          key={region}
          className={selectedRegion === region ? 'active' : ''}
          onClick={() => onSelectRegion(region)}
        >
          {region}
        </button>
      ))}
    </div>
  )
}

export default RegionFilter