import Hello from "./Hello";

function Foo(){
  return <h1>Foo Component</h1>
}
function App() {
  const locations = ["Fairfield", "Ottumwa", "Iowa City", "Cedar Rapid"];
  const title = "React Intro";
  return (
    //Component: return jsx

    <div className="App">
      <h1>{title}</h1>
      {/* Learn React; */}
      <ul>
        {/* <li>{locations[0]}</li>
        <li>{locations[1]}</li>
        <li>{locations[2]}</li> */}
        {locations.map((loc, index) => (
          <strong>
            <li key={index}>{loc}</li>
          </strong>
        ))}
      </ul>
      <Hello />
      <input/>
      <Foo/>
    </div>
  );
}

export default App;
