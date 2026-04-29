import { useState } from "react";
function BasicForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [phone, setPhone] = useState("");
  const [myCar, setMyCar] = useState("");
  const [inputFields, setInputFields] = useState("");

  const handleChange = (e) => {
    setMyCar(event.target.value);
    const { name, value } = e.target;
    setInputFields({
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      setError("Name is required!");
      return;
    }

    if (!email.includes("@")) {
      setError("Email in not valid");
      return;
    }

    if (phone.trim() === "") {
      setError("Enter a phone number");
      return;
    }

    setError("");
    alert("Form Submitted Successfully!");
  };

  return (
    <>
      <h2>Simple form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Name is : {name}</p>

        <input
          type="email"
          placeholder="enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>Email is : {email}</p>

        <input
          type="tel"
          placeholder="Enter a phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <select value={myCar} onChange={handleChange}>
          <option disabled>Select Car</option>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="BMW">BMW</option>
        </select>
        <button type="submit">Submit</button>
      </form>

      <div className="App">
        <from onSubmit={handleSubmit}></from>
      </div>

      {error && <p style={{ color: "blue" }}>{error}</p>}

      <div className="App">
        <form onSubmit={handleSubmit}>
          <div>
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              value={inputFields.email}
              onChange={handleChange}
            ></input>
            <label for="password">Password</label>
            <input
              type="number"
              name="password"
              value={inputFields.password}
              onChange={handleChange}
            ></input>
            <label for="password">Age</label>
            <input
              type="number"
              name="age"
              value={inputFields.age}
              onChange={handleChange}
            ></input>
          </div>
          <button type="submit">Submit Information</button>
        </form>
      </div>
    </>
  );
}

export default BasicForm;
