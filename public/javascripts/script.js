const socket = io(); // backend ma connection request jancha jun hamile app.js ma handle garchau

// navigator hamro window object ma inbuilt huncha
// Igt contains various process that our browser can perform
if (navigator.geolocation) {
  // jaba koi move garcha tesko position watch garnu paryo
  // tesko lagi hamile watchPosition use garchau
  navigator.geolocation.watchPosition(
    (position) => {
      const { latitude, longitude } = position.coords; // jun hamile watch gareko postion cha tesbata hamile latitude ra longitude extract gareu

      socket.emit("send-location", { latitude, longitude }); // backend sanga euta event connect gareko
      // name of the event: "send-location"
      // also we passed latitude and longitude to the event
    },

    // 2nd argument ma hamile watch position ma chai error retrieve garna sakchau ra tyo error lai console ma display garauna sakchau
    (error) => {
      console.error(error);
    },

    // 3rd argument ma chai hamile watch position ko settings set garna sakchau
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
  );
}

// Location magne code

// L.map("map").setView([0, 0], 10); // coordinates chai (0,0) ma set hunu parcha ra 10 level ko zoom huna parcha

const map = L.map("map").setView([0, 0], 16);

// creating empty object markers
const markers = {};

socket.on("receive-location", (data) => {
  const { id, latitude, longitude } = data;
  map.setView([latitude, longitude]);

  // code for markers

  if (markers[id]) {
    markers[id].setLatLang([latitude, longitude]);
  } else {
    markers[id] = L.marker([latitude, longitude]).addTo(map);
  }
});

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; Shreyam Regmi",
}).addTo(map);

socket.on("user-disconnected", (id) => {
  if (markers[id]) {
    map.removeLayer(markers[id]);
    delete markers[id];
  }
});
