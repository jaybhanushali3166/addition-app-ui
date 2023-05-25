import React, { useState } from "react";

const AddNumbers = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [sum, setSum] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:80/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        num1: Number(number1),
        num2: Number(number2),
      }),
    });

    const data = await response.json();
    const result = data.results.sum;
    setSum(result);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Number 1:
          <input
            type="number"
            value={number1}
            onChange={(e) => setNumber1(e.target.value)}
          />
        </label>
        <br />
        <label>
          Number 2:
          <input
            type="number"
            value={number2}
            onChange={(e) => setNumber2(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {sum && <p>Sum: {sum}</p>}
    </div>
  );
};

export default AddNumbers;
