import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function SignMap({ signs }) {
  const center = [48.117, 11.375];

  return (
    <div style={{ height: "400px", width: "100%", marginTop: "20px" }}>
      <MapContainer center={center} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {signs.map(sign => (
          <Marker
            key={sign.id}
            position={[sign.latitude, sign.longitude]}
          >
            <Popup>
              <b>{sign.type}</b><br />
              {sign.signValue || "No value"}<br />
              Heading: {sign.heading}°
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default SignMap;