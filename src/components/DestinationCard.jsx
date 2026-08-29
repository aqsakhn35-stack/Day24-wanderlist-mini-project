function DestinationCard({ destination }) {
  return (
    <div className="destination-card">
      <img src={destination.image} alt={destination.name} />
      <h3>{destination.name}</h3>
      <p className="region-tag">{destination.region}</p>
      <p>Estimated Budget: ${destination.budget}</p>
    </div>
  )
}

export default DestinationCard