import "./App.css";

const Header = () => {
	return <h2>"Hello Header"</h2>;
};

const Field = () => {
	return <input id="1" placeholder="Type here" type="text" />;
};

function Btn() {
  // const text = "Log in"
  // const res = () => {
  //   return "Log in"
  // }
  const pr = <p>Log Goch</p>
	return <button>{pr}</button>;
}

function Bttn() {
  const text = "Log in"
  const logged = false
  
  return <button>{logged ? 'Enter' : text}</button>
}

function App() {
	return (
		<div className="App">
			<Header />
			<Field />
			<Btn />
      <Bttn />
		</div>
	);
}

export default App;
