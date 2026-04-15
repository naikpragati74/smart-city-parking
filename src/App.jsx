import { useState, useEffect } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import ParkingGrid from './components/ParkingGrid'
import EntryExitControl from './components/EntryExitControl'
import RealTimeStats from './components/RealTimeStats'

function App() {
  const [parkingSpots, setParkingSpots] = useState([])
  const [totalSpots] = useState(84)
  const [occupiedSpots, setOccupiedSpots] = useState(0)
  const [totalCars, setTotalCars] = useState(0)
  const [entryQueue, setEntryQueue] = useState(0)
  const [exitQueue, setExitQueue] = useState(0)

  // Initialize parking spots
  useEffect(() => {
    const spots = Array.from({ length: totalSpots }, (_, i) => ({
      id: i + 1,
      occupied: Math.random() > 0.6, // 40% occupied initially
      floor: Math.floor(i / 14) + 1,
      variant: ['A', 'B', 'C', 'D', 'E', 'F'][Math.floor(i / 14)]
    }))
    setParkingSpots(spots)
    setOccupiedSpots(spots.filter(s => s.occupied).length)
    setTotalCars(spots.filter(s => s.occupied).length)
  }, [])

  // Simulate real-time vehicle entry
  const handleEntry = () => {
    if (occupiedSpots < totalSpots) {
      const vacantSpot = parkingSpots.find(s => !s.occupied)
      if (vacantSpot) {
        const newSpots = parkingSpots.map(s =>
          s.id === vacantSpot.id ? { ...s, occupied: true } : s
        )
        setParkingSpots(newSpots)
        setOccupiedSpots(prev => prev + 1)
        setTotalCars(prev => prev + 1)
        setEntryQueue(prev => Math.max(0, prev - 1))
      }
    }
  }

  // Simulate real-time vehicle exit
  const handleExit = () => {
    if (occupiedSpots > 0) {
      const occupiedSpot = parkingSpots.find(s => s.occupied)
      if (occupiedSpot) {
        const newSpots = parkingSpots.map(s =>
          s.id === occupiedSpot.id ? { ...s, occupied: false } : s
        )
        setParkingSpots(newSpots)
        setOccupiedSpots(prev => prev - 1)
        setTotalCars(prev => Math.max(0, prev - 1))
        setExitQueue(prev => Math.max(0, prev - 1))
      }
    }
  }

  // Simulate entry requests
  const addEntryRequest = () => {
    setEntryQueue(prev => prev + 1)
    setTimeout(handleEntry, 500 + Math.random() * 1000)
  }

  // Simulate exit requests
  const addExitRequest = () => {
    setExitQueue(prev => prev + 1)
    setTimeout(handleExit, 500 + Math.random() * 1000)
  }

  // Auto-simulate vehicle movements every 15 seconds
  useEffect(() => {
    const interv = setInterval(() => {
      if (Math.random() > 0.5 && occupiedSpots < totalSpots) {
        addEntryRequest()
      } else if (occupiedSpots > 0) {
        addExitRequest()
      }
    }, 15000)
    return () => clearInterval(interv)
  }, [occupiedSpots, totalSpots])

  const availableSpots = totalSpots - occupiedSpots
  const occupancyPercentage = ((occupiedSpots / totalSpots) * 100).toFixed(1)

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">🏙️ Smart City Parking Management System</h1>
          <p className="app-subtitle">Real-time Parking Space Tracking & Management</p>
        </div>
      </header>

      <main className="app-main">
        <div className="dashboard-section">
          <Dashboard
            totalSpots={totalSpots}
            occupiedSpots={occupiedSpots}
            availableSpots={availableSpots}
            occupancyPercentage={occupancyPercentage}
            totalCars={totalCars}
          />
        </div>

        <div className="stats-section">
          <RealTimeStats
            entryQueue={entryQueue}
            exitQueue={exitQueue}
            occupiedSpots={occupiedSpots}
            availableSpots={availableSpots}
          />
        </div>

        <div className="control-section">
          <EntryExitControl
            onEntry={addEntryRequest}
            onExit={addExitRequest}
            availableSpots={availableSpots}
            occupiedSpots={occupiedSpots}
          />
        </div>

        <div className="parking-grid-section">
          <h2 className="section-title">Parking Lot Layout</h2>
          <ParkingGrid spots={parkingSpots} />
        </div>
      </main>

      <footer className="app-footer">
        <p>Smart City Parking System © 2026 | Real-time Occupancy Management</p>
      </footer>
    </div>
  )
}

export default App
