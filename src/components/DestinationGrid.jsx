import DestinationCard from './DestinationCard'

function DestinationGrid({ destinations }) {
  if (destinations.length === 0) {
    return <p className="empty-msg">No destinations found for this region.</p>
  }

  return (
    <div className="destination-grid">
      {destinations.map((dest) => (
        <DestinationCard key={dest.id} destination={dest} />
      ))}
    </div>
  )
}

export default DestinationGrid