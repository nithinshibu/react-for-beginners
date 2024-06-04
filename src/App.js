import "./App.css";

function App() {
  const age = 19;
  const isGreen = true;

  return (
    <div className="App">
      {age >= 18 ? <OverAge /> : <UnderAge />}
      <h1 style={{ color: isGreen ? "green" : "red" }}>THIS HAS COLOR</h1>
    </div>
  );
}

const OverAge = () => {
  return <h1>OVER AGE</h1>;
};

const UnderAge = () => {
  return <h1>UNDER AGE</h1>;
};

export default App;
