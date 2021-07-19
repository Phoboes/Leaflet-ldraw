// import L from "leaflet";
import { MapContainer, MapControl, FeatureGroup } from "react-leaflet";
import styles from "./Map.module.css";
import TileLayers from "./TileLayers/TileLayers";
import { EditControl } from "react-leaflet-draw";

const Map = (props) => {
  // const reactFGref = useRef();

  return (
    <div>
      <MapContainer
        center={[-34.040441, 151.1988752]}
        zoom={13}
        className={styles["leaflet-container"]}>
        <TileLayers />
        <FeatureGroup>
          <EditControl
            position="topright"
            // onEdited={this._onEdited}
            // onCreated={this._onCreated}
            // onDeleted={this._onDeleted}
            // onMounted={this._onMounted}
            // onEditStart={this._onEditStart}
            // onEditStop={this._onEditStop}
            // onDeleteStart={this._onDeleteStart}
            // onDeleteStop={this._onDeleteStop}
            draw={
              {
                // rectangle: false,
              }
            }
          />
        </FeatureGroup>
      </MapContainer>
    </div>
  );
};

export default Map;
