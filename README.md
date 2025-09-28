# Live Device Tracker

A real-time location tracking system that allows multiple devices to share their live location on an interactive map. Built with Node.js, Express.js, Socket.IO, and Leaflet.js for seamless real-time communication and map visualization.

## 🌟 Features

- **Real-time Location Tracking**: Track multiple devices simultaneously with live location updates
- **Interactive Map**: Powered by Leaflet.js with OpenStreetMap tiles for accurate location visualization
- **Multi-device Support**: Multiple users can connect and track each other's locations in real-time
- **Automatic Marker Management**: Device markers are automatically added when users connect and removed when they disconnect
- **High Accuracy GPS**: Uses browser's geolocation API with high accuracy settings
- **Responsive Design**: Clean and simple interface that works across different devices

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js
- **Real-time Communication**: Socket.IO
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Template Engine**: EJS
- **Maps**: Leaflet.js with OpenStreetMap
- **Geolocation**: HTML5 Geolocation API

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (v14 or higher)
- npm (Node Package Manager)
- A modern web browser with geolocation support

## ⚡ Quick Start

### 1. Clone the Repository
```bash
git clone <repository-url>
cd real-time-tracking-system
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Server
```bash
node app.js
```

### 4. Access the Application
Open your browser and navigate to:
```
http://localhost:5000
```

## 📁 Project Structure

```
real-time-tracking-system/
├── app.js                 # Main server file
├── package.json          # Project dependencies and scripts
├── public/               # Static assets
│   ├── images/          # Image assets
│   ├── javascripts/
│   │   └── script.js    # Client-side JavaScript
│   └── stylesheets/
│       └── style.css    # CSS styles
└── views/
    └── index.ejs        # Main HTML template
```

## 🔧 How It Works

### Backend (app.js)
- Sets up an Express.js server with Socket.IO integration
- Handles WebSocket connections for real-time communication
- Listens for location updates from connected clients
- Broadcasts location data to all connected clients
- Manages user connections and disconnections

### Frontend (script.js)
- Establishes WebSocket connection with the server
- Uses HTML5 Geolocation API to track user's location
- Sends location updates to the server in real-time
- Receives and displays other users' locations on the map
- Manages map markers for connected devices

### Map Integration
- Uses Leaflet.js for interactive map functionality
- Displays real-time location markers for all connected devices
- Automatically centers the map on user's current location
- Handles marker updates and cleanup when users disconnect

## 🔌 Socket Events

### Client to Server
- `send-location`: Sends user's current latitude and longitude to server

### Server to Client
- `receive-location`: Broadcasts location data to all connected clients
- `user-disconnected`: Notifies clients when a user disconnects

## ⚙️ Configuration

### Geolocation Settings
The application uses the following geolocation settings for optimal accuracy:

```javascript
{
  enableHighAccuracy: true,  // Use GPS for better accuracy
  timeout: 5000,            // 5 second timeout for location requests
  maximumAge: 0             // Don't use cached location data
}
```

### Map Settings
- **Initial View**: Coordinates [0, 0] with zoom level 16
- **Tile Layer**: OpenStreetMap
- **Attribution**: Custom attribution can be modified in script.js

## 🚀 Deployment

### Local Deployment
The application runs on `localhost:5000` by default. To change the port:

```javascript
// In app.js
server.listen(3000, () => {
  console.log("Running successfully on http://localhost:3000");
});
```

### Production Deployment
For production deployment:

1. Set up environment variables for port configuration
2. Use a process manager like PM2
3. Configure reverse proxy (Nginx/Apache)
4. Ensure HTTPS for geolocation API access

## 🔒 Privacy & Security Considerations

- Location data is only shared in real-time and not stored persistently
- Users must explicitly grant location permission
- Consider implementing user authentication for production use
- Add rate limiting to prevent abuse
- Use HTTPS in production for secure geolocation access

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🐛 Known Issues

- Location accuracy depends on device GPS capabilities
- Some browsers may require HTTPS for geolocation access
- Mobile devices may have better location accuracy than desktop computers

## 🔮 Future Enhancements

- [ ] User authentication and profiles
- [ ] Location history and tracking trails
- [ ] Custom map markers and themes
- [ ] Group-based tracking
- [ ] Offline support
- [ ] Mobile app development
- [ ] Database integration for persistent data
- [ ] Real-time messaging between tracked devices

## 📞 Support

If you encounter any issues or have questions, please:
1. Check the existing issues on GitHub
2. Create a new issue with detailed information
3. Include browser console logs if reporting bugs

---

**Built with ❤️ using Node.js and Socket.IO**