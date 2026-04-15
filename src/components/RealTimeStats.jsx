import { useState, useEffect } from 'react'
import './RealTimeStats.css'

function RealTimeStats({ entryQueue, exitQueue, occupiedSpots, availableSpots }) {
  const [animateEntry, setAnimateEntry] = useState(false)
  const [animateExit, setAnimateExit] = useState(false)

  useEffect(() => {
    setAnimateEntry(true)
    const timer = setTimeout(() => setAnimateEntry(false), 300)
    return () => clearTimeout(timer)
  }, [entryQueue])

  useEffect(() => {
    setAnimateExit(true)
    const timer = setTimeout(() => setAnimateExit(false), 300)
    return () => clearTimeout(timer)
  }, [exitQueue])

  const avgOccupancyTrend = Math.round((occupiedSpots / (occupiedSpots + availableSpots)) * 100)

  return (
    <div className="real-time-stats">
      <div className="stats-header">
        <h2>Real-Time Live Activity</h2>
        <div className="live-indicator">
          <span className="pulse"></span>
          <span>Live</span>
        </div>
      </div>

      <div className="stats-grid">
        <div className={`stat-box entry-queue ${animateEntry ? 'animate' : ''}`}>
          <div className="stat-label">Entry Queue</div>
          <div className="stat-number">{entryQueue}</div>
          <div className="stat-description">Vehicles waiting</div>
          <div className="queue-visual">
            {Array.from({ length: Math.min(entryQueue, 5) }).map((_, i) => (
              <div key={i} className="queue-car">🚗</div>
            ))}
          </div>
        </div>

        <div className={`stat-box exit-queue ${animateExit ? 'animate' : ''}`}>
          <div className="stat-label">Exit Queue</div>
          <div className="stat-number">{exitQueue}</div>
          <div className="stat-description">Vehicles leaving</div>
          <div className="queue-visual">
            {Array.from({ length: Math.min(exitQueue, 5) }).map((_, i) => (
              <div key={i} className="queue-car">🚗</div>
            ))}
          </div>
        </div>

        <div className="stat-box occupancy-trend">
          <div className="stat-label">Current Occupancy</div>
          <div className="stat-number">{occupiedSpots}</div>
          <div className="stat-description">of {occupiedSpots + availableSpots}</div>
          <div className="trend-indicator">
            {avgOccupancyTrend > 70 ? '📈 High' : avgOccupancyTrend > 40 ? '➡️ Medium' : '📉 Low'}
          </div>
        </div>

        <div className="stat-box availability">
          <div className="stat-label">Availability Status</div>
          <div className="availability-badge">
            {availableSpots > 0 ? (
              <>
                <span className="badge-icon">✓</span>
                <span className="badge-text">Available</span>
              </>
            ) : (
              <>
                <span className="badge-icon">✗</span>
                <span className="badge-text">Full</span>
              </>
            )}
          </div>
          <div className="stat-description">{availableSpots} spots free</div>
        </div>
      </div>

      <div className="activity-timeline">
        <h3>System Status</h3>
        <div className="timeline-items">
          <div className="timeline-item">
            <span className="timeline-dot"></span>
            <span className="timeline-text">Last activity: Processing...</span>
          </div>
          <div className="timeline-item">
            <span className="timeline-dot"></span>
            <span className="timeline-text">System monitoring enabled</span>
          </div>
          <div className="timeline-item">
            <span className="timeline-dot"></span>
            <span className="timeline-text">Real-time updates active</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RealTimeStats
