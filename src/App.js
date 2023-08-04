import './App.css';

const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last name: Smith</h2>
      <h3>Age: {props.age}</h3>
    </>
  )
}

const App = () => {
  const name = "Jhon";
  const age =23
  return (
    <div className="App">
    <h1>{ "Hello" }</h1>
    {name ? 
      (<>
          <Person name={name} age={age} />
      </>):
      (<>
        <h2>No name provided</h2>
      </>)}
    </div>
  );
}

export default App;
