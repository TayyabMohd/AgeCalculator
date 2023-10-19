import React, { useState } from "react";
import "./App.css";

function App() {
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const inputDate = document.getElementById("inp").value;
    const birthDate = new Date(inputDate);
    const currentDate = new Date();

    if (!isNaN(birthDate)) {
      const ageInMilliseconds = currentDate - birthDate;
      const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
      setAge(Math.floor(ageInYears));
    } else {
      setAge("Invalid date");
    }
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <br />
      <h5>Enter your date of birth</h5>
      <br />
      <input type="date" id="inp" name="inp" />
      <br />
      <button
        id="btn"
        style={{ color: "white", backgroundColor: "blue" }}
        onClick={calculateAge}
      >
        Calculate Age
      </button>
      <br />
      <span id="res" name="res">
        {age !== null ? `Your age is ${age} years.` : ""}
      </span>
    </div>
  );
}

export default App;
