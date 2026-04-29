import { useState } from "react";

function EvenOdd() {
  const [num, setNum] = useState(""); // user input number
  const [result, setResult] = useState(""); // output message

  const checkEvenOdd = () => {
    if (num === "") {
      setResult("Please enter a number 😅");
    } else if (num % 2 === 0) {
      console.log("This is even");
      setResult("Number is Even ✅");
    } else {
      console.log("This is odd");
      setResult("Number is Odd 🔹");
    }
  };

  return (
    <>
      <h2>Even or Odd Checker 🔢</h2>

      <input
        type="number"
        placeholder="Enter a number"
        value={num}
        onChange={(e) => setNum(e.target.value)} // input se value lena
      />

      <button onClick={checkEvenOdd}>Check</button>

      <p>{num && `Number ${num} is ${result}`}</p>
    </>
  );
}

export default EvenOdd;
