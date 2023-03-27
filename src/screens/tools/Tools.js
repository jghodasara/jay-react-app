import React from "react";
import Calculator from "../calculator/Calculator";
import Weather from "../weather/Weather";

function Tools() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <div
        style={{ width: "50%", justifyContent: "center", alignItems: "center" }}
      >
        <Weather />
      </div>
      <div
        style={{ width: "50%", justifyContent: "center", alignItems: "center" }}
      >
        <Calculator />
      </div>
    </div>
  );
}
export default Tools;
