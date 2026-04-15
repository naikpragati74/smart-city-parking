# Smart City Parking Management System

A modern, fully-animated Smart City Parking Management website built with React and Vite. Features real-time parking spot tracking, live car counting, entry/exit management, and an interactive dashboard with occupancy statistics.

## 🎯 Features

- **Real-Time Parking Spot Tracking**: Live display of all parking spaces with visual status indicators
- **Animated Dashboard**: Dynamic statistics showing occupancy rates, available spots, and total vehicles
- **Entry/Exit Management**: Simulation of vehicle entry/exit with real-time queue management
- **Interactive Parking Grid**: Visual representation of all parking floors and spots
- **Live Statistics**: Real-time activity monitoring with animated counters
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Beautiful UI/UX**: Modern gradient backgrounds with smooth animations and transitions
- **Status Indicators**: Visual feedback for full parking lot or available spaces

## 📋 Project Structure

```
.
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx           # Main statistics display
│   │   ├── Dashboard.css
│   │   ├── ParkingGrid.jsx         # Parking spot visualization
│   │   ├── ParkingGrid.css
│   │   ├── EntryExitControl.jsx    # Entry/exit simulation
│   │   ├── EntryExitControl.css
│   │   ├── RealTimeStats.jsx       # Live activity stats
│   │   └── RealTimeStats.css
│   ├── styles/
│   │   ├── global.css              # Global styling
│   ├── App.jsx                     # Main app component
│   ├── App.css
│   └── main.jsx                    # App entry point
├── public/                         # Static assets
├── index.html                      # HTML template
├── package.json                    # Dependencies
├── vite.config.js                  # Vite configuration
└── README.md                       # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd smart-parking-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

## 🎮 How to Use

### Dashboard Section
- View total occupied spots, available spots, occupancy percentage, and total vehicles
- Real-time updates as vehicles enter/exit

### Parking Grid
- Visual representation of all parking floors
- Green spots indicate vacant spaces
- Red spots indicate occupied spaces
- Click on spots to see detailed information (hover tooltip)

### Entry/Exit Control
- **Entry Gate**: Click "Vehicle Entry" to process incoming vehicles
  - Only works if spaces are available
  - Shows available spots count
  
- **Exit Gate**: Click "Vehicle Exit" to process outgoing vehicles
  - Only works if vehicles are parked
  - Shows parked vehicles count

### Real-Time Stats
- Entry Queue: Number of vehicles waiting to enter
- Exit Queue: Number of vehicles waiting to exit
- Current Occupancy: Live count of parked vehicles
- Availability Status: Visual indicator if lot is full or available

## 💡 Features Explained

### Real-Time Simulation
The system automatically simulates vehicle movements every 15 seconds, creating realistic traffic patterns.

### Entry/Exit Queue Management
Queue system simulates waiting vehicles with animated counters and queue visualizations.

### Status Indicators
- **Live Indicator**: Pulses to show system is actively monitoring
- **Parking Available**: Green status when spaces are available
- **Lot Full**: Red status when parking is at capacity

### Animated Transitions
- Smooth fade-in/slide-in animations for components
- Parking spot animations when occupied/vacant
- Queue car animations
- Button pulse effects on interactions

## 🎨 Styling

### Color Scheme
- Primary: Cyan (#4fc3f7) - Entry/General info
- Success: Green (#51cf66) - Available/Vacant
- Warning: Orange (#ff922b) - Exit
- Error: Red (#ff6b6b) - Occupied/Full
- Dark: Navy (#16213e) - Background

### Responsive Breakpoints
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: Below 768px

## 🔧 Technologies Used

- **React 18**: UI library
- **Vite 4**: Fast build tool
- **CSS3**: Styling with animations and gradients
- **JavaScript ES6+**: Modern JavaScript features

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎯 Future Enhancements

- Real parking spot reservation system
- Payment integration
- Mobile app version
- Database integration for persistent storage
- Admin dashboard for parking management
- QR code based entry/exit
- Vehicle history tracking
- Email/SMS notifications
- Dynamic pricing based on occupancy

## 📝 License

MIT License - Feel free to use this project for educational or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📧 Contact

For questions or suggestions, feel free to reach out.

---

**Built with ❤️ for Smart City Solutions**

Enjoy seamless parking management with the Smart City Parking Management System!
