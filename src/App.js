import "./App.css";

function App() {
  return (
    <div className="App">
      <User name="Nithin" age={25} email="nithin@gmail.com" />
      <User name="Jack" age={21} email="jack-sparrow@gmail.com" />
    </div>
  );
}

//this is a react component
const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h3>{props.email}</h3>
    </div>
  );
};

export default App;
