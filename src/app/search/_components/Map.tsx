"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import L from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import { MapPin } from "lucide-react";
import { SearchResultItem } from "@/types/searchResultItem";
import { getCenter } from "geolib";

const customIcon = L.divIcon({
  html: renderToStaticMarkup(
    <div className="flex items-center justify-center">
      <MapPin size={30} className="fill-main text-main" />
    </div>,
  ),
  className: "",
  iconSize: [30, 30],
  iconAnchor: [20, 40],
});

export default function FullMap({ items }: { items: SearchResultItem[] }) {
  const coordinates = items.map((item) => ({
    longitude: item.long,
    latitude: item.lat,
  }));

  const center = getCenter(coordinates) as {
    longitude: number;
    latitude: number;
  };
  return (
    <MapContainer
      center={[center.latitude, center.longitude]}
      zoom={11}
      className="h-full w-full"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {items.map((item) => (
        <Marker
          key={item.id}
          position={[item.lat, item.long]}
          icon={customIcon}
        >
          <Popup>{item.title}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
