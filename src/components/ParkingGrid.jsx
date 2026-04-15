import './ParkingGrid.css'

function ParkingSpot({ spot, index }) {
  return (
    <div
      className={`parking-spot ${spot.occupied ? 'occupied' : 'vacant'}`}
      title={`Spot ${spot.id} - Floor ${spot.floor}${spot.variant} - ${spot.occupied ? 'Occupied' : 'Vacant'}`}
    >
      <div className="spot-inner">
        <div className="spot-number">{spot.id}</div>
        {spot.occupied && (
          <div className="car-indicator">
            <div className="car-icon">🚗</div>
          </div>
        )}
      </div>
      <div className="spot-label">{spot.variant}{spot.floor}</div>
    </div>
  )
}

function ParkingGrid({ spots }) {
  const floors = {}
  spots.forEach(spot => {
    if (!floors[spot.floor]) {
      floors[spot.floor] = []
    }
    floors[spot.floor].push(spot)
  })

  return (
    <div className="parking-grid-container">
      {Object.entries(floors).map(([floor, floorSpots]) => (
        <div key={floor} className="floor-section">
          <h3 className="floor-title">Floor {floor}</h3>
          <div className="floor-grid">
            {floorSpots.map((spot, idx) => (
              <ParkingSpot key={spot.id} spot={spot} index={idx} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ParkingGrid
