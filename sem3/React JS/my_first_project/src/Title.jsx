import "./Title.css";

function Title() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;

    if (!name) {
      alert("Please enter your name!");
      return;
    }

    alert(`Welcome, ${name}!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Enter your name" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Title;
