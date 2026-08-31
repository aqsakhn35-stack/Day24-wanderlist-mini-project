function DestinationCard({ destination }) {
  return (
    <div className="destination-card">
      <img
  src={destination.image || 'https://via.placeholder.com/300x180?text=No+Image'}
  alt={destination.name}
/>

      <h3>{destination.name}</h3>

      <p className="region-tag">
        Region: {destination.region}
      </p>

      <p>
        Capital: {destination.capital}
      </p>

      <p>
        Population: {destination.population?.toLocaleString()}
      </p>

      <p>
        Estimated Budget: ${destination.budget}
      </p>
    </div>
  )
}

export default DestinationCard