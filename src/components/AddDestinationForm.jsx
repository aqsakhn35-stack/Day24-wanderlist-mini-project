import { useState } from 'react'

function AddDestinationForm({ onAddDestination }) {
  const [name, setName] = useState('')
  const [region, setRegion] = useState('Asia')
  const [budget, setBudget] = useState('')
  const [image, setImage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!name || !budget) return

    const newDestination = {
      id: Date.now(),
      name,
      region,
      budget: Number(budget),
      image: image || 'https://via.placeholder.com/300x180?text=Destination',
    }

    onAddDestination(newDestination)
    setName('')
    setBudget('')
    setImage('')
  }

  return (
    <form className="add-destination-form" onSubmit={handleSubmit}>
      <h3>Add New Destination</h3>
      <input
        type="text"
        placeholder="Destination name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <select value={region} onChange={(e) => setRegion(e.target.value)}>
        <option>Asia</option>
        <option>Europe</option>
        <option>Americas</option>
        <option>Africa</option>
        <option>Oceania</option>
      </select>
      <input
        type="number"
        placeholder="Estimated budget ($)"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Image URL (optional)"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Add Destination</button>
    </form>
  )
}

export default AddDestinationForm