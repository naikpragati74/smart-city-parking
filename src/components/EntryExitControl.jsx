import { useState } from 'react'
import './EntryExitControl.css'

function EntryExitControl({ onEntry, onExit, availableSpots, occupiedSpots }) {
  const [entryActive, setEntryActive] = useState(false)
  const [exitActive, setExitActive] = useState(false)

  const handleEntry = () => {
    if (availableSpots > 0) {
      setEntryActive(true)
      onEntry()
      setTimeout(() => setEntryActive(false), 800)
    }
  }

  const handleExit = () => {
    if (occupiedSpots > 0) {
      setExitActive(true)
      onExit()
      setTimeout(() => setExitActive(false), 800)
    }
  }

  return (
    <div className="entry-exit-control">
      <h2 className="control-title">Entry / Exit Management</h2>
      
      <div className="control-panels">
        <div className="control-gate entry-gate">
          <h3>Entry Gate</h3>
          <button
            className={`gate-button entry-button ${entryActive ? 'active' : ''}`}
            onClick={handleEntry}
            disabled={availableSpots === 0}
            title={availableSpots > 0 ? 'Click to process entry' : 'No available spots'}
          >
            <span className="button-icon">🚗</span>
            <span className="button-text">Vehicle Entry</span>
          </button>
          <div className="gate-info">
            <p>Available Spots: {availableSpots}</p>
            <p className="gate-status">
              {availableSpots > 0 ? '✓ Ready' : '✗ Full'}
            </p>
          </div>
        </div>

        <div className="control-gate exit-gate">
          <h3>Exit Gate</h3>
          <button
            className={`gate-button exit-button ${exitActive ? 'active' : ''}`}
            onClick={handleExit}
            disabled={occupiedSpots === 0}
            title={occupiedSpots > 0 ? 'Click to process exit' : 'No vehicles to exit'}
          >
            <span className="button-icon">🚗</span>
            <span className="button-text">Vehicle Exit</span>
          </button>
          <div className="gate-info">
            <p>Parked Vehicles: {occupiedSpots}</p>
            <p className="gate-status">
              {occupiedSpots > 0 ? '✓ Ready' : '✗ Empty'}
            </p>
          </div>
        </div>
      </div>

      <div className="gate-visualization">
        <div className="entry-visualization">
          <div className="road entry-road">
            <div className="lane-marking"></div>
          </div>
          <div className="barrier entry-barrier">
            <div className="barrier-stripe"></div>
          </div>
        </div>

        <div className="exit-visualization">
          <div className="barrier exit-barrier">
            <div className="barrier-stripe"></div>
          </div>
          <div className="road exit-road">
            <div className="lane-marking"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EntryExitControl
