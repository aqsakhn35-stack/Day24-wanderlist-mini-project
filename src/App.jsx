import { useState } from 'react'
import AppHeader from './components/AppHeader'
import RegionFilter from './components/RegionFilter'
import DestinationGrid from './components/DestinationGrid'
import AddDestinationForm from './components/AddDestinationForm'
import BudgetWidget from './components/BudgetWidget'
import './App.css'

const initialDestinations = [
  { id: 1, name: 'Tokyo', region: 'Asia', budget: 1500, image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400' },
  { id: 2, name: 'Paris', region: 'Europe', budget: 2000, image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400' },
  { id: 3, name: 'New York', region: 'Americas', budget: 1800, image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400' },
]

function App() {
  const [destinations, setDestinations] = useState(initialDestinations)
  const [selectedRegion, setSelectedRegion] = useState('All')

  function handleAddDestination(newDest) {
    setDestinations((prev) => [...prev, newDest])
  }

  const filteredDestinations =
    selectedRegion === 'All'
      ? destinations
      : destinations.filter((d) => d.region === selectedRegion)

  return (
    <div className="dashboard">
      <AppHeader />
      <RegionFilter selectedRegion={selectedRegion} onSelectRegion={setSelectedRegion} />
      <BudgetWidget destinations={filteredDestinations} />
      <AddDestinationForm onAddDestination={handleAddDestination} />
      <DestinationGrid destinations={filteredDestinations} />
    </div>
  )
}

export default App