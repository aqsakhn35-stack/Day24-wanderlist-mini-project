function BudgetWidget({ destinations }) {
  const total = destinations.reduce((sum, d) => sum + d.budget, 0)

  return (
    <div className="budget-widget">
      <h3>Trip Budget Summary</h3>
      <p>Total Destinations: {destinations.length}</p>
      <p>Total Estimated Budget: ${total}</p>
    </div>
  )
}

export default BudgetWidget