import './Dashboard.css'

function Dashboard({ totalSpots, occupiedSpots, availableSpots, occupancyPercentage, totalCars }) {
  return (
    <div className="dashboard">
      <div className="dashboard-grid">
        <div className="stat-card occupied-card">
          <div className="stat-icon">🚗</div>
          <div className="stat-content">
            <h3>Occupied Spots</h3>
            <p className="stat-value">{occupiedSpots}</p>
            <p className="stat-label">of {totalSpots}</p>
          </div>
        </div>

        <div className="stat-card available-card">
          <div className="stat-icon">✓</div>
          <div className="stat-content">
            <h3>Available Spots</h3>
            <p className="stat-value">{availableSpots}</p>
            <p className="stat-label">Ready to park</p>
          </div>
        </div>

        <div className="stat-card occupancy-card">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <h3>Occupancy Rate</h3>
            <p className="stat-value">{occupancyPercentage}%</p>
            <div className="occupancy-bar">
              <div className="occupancy-fill" style={{ width: `${occupancyPercentage}%` }}></div>
            </div>
          </div>
        </div>

        <div className="stat-card total-card">
          <div className="stat-icon">📈</div>
          <div className="stat-content">
            <h3>Total Vehicles</h3>
            <p className="stat-value">{totalCars}</p>
            <p className="stat-label">In parking lot</p>
          </div>
        </div>
      </div>

      <div className="dashboard-status">
        <div className={`status-indicator ${availableSpots > 0 ? 'available' : 'full'}`}>
          {availableSpots > 0 ? (
            <>
              <span className="status-dot"></span>
              <span className="status-text">Parking Available</span>
            </>
          ) : (
            <>
              <span className="status-dot error"></span>
              <span className="status-text">Lot Full</span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
