import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const WorldMap = () => {
  return (
    <ComposableMap
      projectionConfig={{
        scale: 150,
      }}
    >
      <Geographies geography="./img/map_features.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#EAEAEC"
              stroke="#D6D6DA"
            />
          ))
        }
      </Geographies>
      {/* Add markers for Sweden */}
      <Marker coordinates={[18.6435, 60.1282]}>
        <circle r={8} fill="#F53" />
      </Marker>
    </ComposableMap>
  );
};

export default WorldMap;
