import { Component } from "react";
import "./App.css";

const Header = () => {
	return <h2>"Hello Header"</h2>;
};

// const Field = () => {
// 	const holder = "Goch, type here";
// 	const styledField = {
// 		width: "300px",
// 	};
// 	return (
// 		<input
// 			placeholder={holder}
// 			type="text"
// 			style={styledField}
// 			id="123456789"
// 		/>
// 	);
// };

class Field extends Component {
	render() {
		const holder = "Goch, type here";
		const styledField = {
			width: "300px",
		};
		return (
			<input
				placeholder={holder}
				type="text"
				style={styledField}
				id="123456789"
			/>
		);
	}
}

function Btn() {
	// const text = "Log in"
	// const res = () => {
	//   return "Log in"
	// }
	const pr = <p>Log Goch</p>;
	return <button>{pr}</button>;
}

function Bttn() {
	const text = "Log in";
	const logged = false;

	return <button>{logged ? "Enter" : text}</button>;
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

export { Header };
export default App;
