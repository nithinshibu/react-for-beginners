import "./App.css";

function App() {
  const users = [
    { name: "Nithin", age: 25 },
    { name: "Thivagar", age: 23 },
    { name: "Ashutosh", age: 23 },
  ];
  return (
    <div className="App">
      {users.map((user, key) => {
        return <User name={user.name} age={user.age} />;
      })}
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      {props.name} {props.age}
    </div>
  );
};

export default App;
