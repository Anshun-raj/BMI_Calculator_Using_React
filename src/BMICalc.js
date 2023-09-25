import React, { useMemo, useState } from "react";

function BMICalc() {
  const [weight, setWeight] = useState(50);
  const [height, setHeight] = useState(100);

  function weightChange(e) {
    setWeight(e.target.value);
  }

  function heightChange(e) {
    setHeight(e.target.value);
  }

  const output = useMemo(() => {
    const calHeight = height / 100;
    return (weight / (calHeight * calHeight)).toFixed(2);
  }, [weight, height]);

  return (
    <div
      style={{
        width: "400px",
        height: "350px",
        margin: "auto",
        marginTop: "100px",
        textAlign: "center",
        border: "2px solid #000",
        borderRadius: "5px",
      }}
    >
      <h1 style={{ backgroundColor: "blue", padding: "10px", color: "#fff" }}>
        BMI CALCULATOR
      </h1>
      <p style={{ margin: "10px", fontWeight: "bold", fontSize: "20px" }}>
        Weight: {weight}kg
      </p>
      <input
        type="range"
        step="1"
        min="40"
        max="200"
        onChange={weightChange}
        style={{ margin: "10px" }}
      />
      <p style={{ margin: "10px", fontWeight: "bold", fontSize: "20px" }}>
        Height: {height}cm
      </p>
      <input
        type="range"
        step="1"
        onChange={heightChange}
        style={{ margin: "10px" }}
      />
      <div className="output-section">
        <p
          style={{
            margin: "15px",
            fontWeight: "bold",
            fontSize: "20px",
            color: "red",
          }}
        >
          Your BMI is:
        </p>
        <p
          className="output"
          style={{
            marginTop: "10px",
            fontWeight: "bold",
            fontSize: "20px",
            padding: "10px 10px",
            backgroundColor: "black",
            width: "20%",
            margin: "auto",
            borderRadius: "5px",
          }}
        >
          <h5 style={{ color: "#fff",fontWeight:'bold', fontSize:'18px' }}>{output}</h5>
        </p>
      </div>
    </div>
  );
}

export default BMICalc;
