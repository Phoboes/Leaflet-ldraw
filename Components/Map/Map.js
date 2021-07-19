// import L from "leaflet";
import { MapContainer, MapControl } from "react-leaflet";
import styles from "./Map.module.css";
import TileLayers from "./TileLayers/TileLayers";

const Map = (props) => {
  return (
    <div>
      <MapContainer
        center={[-34.040441, 151.1988752]}
        zoom={13}
        className={styles["leaflet-container"]}
      >
        <TileLayers />
      </MapContainer>
    </div>
  );
};

export default Map;
