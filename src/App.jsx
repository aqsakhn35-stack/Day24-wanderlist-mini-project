import { useState, useEffect } from 'react'
import AppHeader from './components/AppHeader'
import RegionFilter from './components/RegionFilter'
import DestinationGrid from './components/DestinationGrid'
import AddDestinationForm from './components/AddDestinationForm'
import BudgetWidget from './components/BudgetWidget'
import './App.css'

const API_KEY = 'rc_live_05b5ebad91584d74ba63535d83e8d495'

function App() {
  const [destinations, setDestinations] = useState([])
  const [selectedRegion, setSelectedRegion] = useState('All')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function fetchCountries() {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch(
          'https://api.restcountries.com/countries/v5?limit=12&response_fields=names.common,region,capitals.name,population,flag.url_png',
          { headers: { Authorization: `Bearer ${API_KEY}` } }
        )

        if (!response.ok) {
          throw new Error('Failed to fetch countries')
        }

        const json = await response.json()
        const countries = json.data.objects

        const formattedDestinations = countries.map((country, index) => ({
          id: index + 1,
          name: country.names.common,
          region: country.region,
          budget: Math.floor((country.population || 0) / 100000),
          image: country.flag.url_png,
          capital: country.capitals?.[0]?.name || 'N/A',
          population: country.population,
        }))

        if (!cancelled) {
          setDestinations(formattedDestinations)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message)
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    fetchCountries()

    return () => {
      cancelled = true
    }
  }, [])

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
      {loading && <p>Loading destinations...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <>
          <BudgetWidget destinations={filteredDestinations} />
          <AddDestinationForm onAddDestination={handleAddDestination} />
          <DestinationGrid destinations={filteredDestinations} />
        </>
      )}
    </div>
  )
}

export default App