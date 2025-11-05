import { Component } from "react";
import "./App.css";

const Header = () => {
	return <h2>"Hello Header"</h2>;
};

const Field = () => {
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
};

// class Field extends Component {
// 	render() {
// 		const holder = "Goch, type here";
// 		const styledField = {
// 			width: "300px",
// 		};
// 		return (
// 			<input
// 				placeholder={holder}
// 				type="text"
// 				style={styledField}
// 				id="123456789"
// 			/>
// 		);
// 	}
// }

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

// function App() {
// 	return (
// 		<div className="App">
// 			<Header />
// 			<Field />
// 			<Btn />
// 			<Bttn />
// 		</div>
// 	);
// }

// function WhoAmI (props) {
// function WhoAmI ({name, surname, link}) {

// 	return (
// 		<div>
// 			{/* <h1>My name is {props.name}, surname {props.surname}</h1> */}
// 			<h1>My name is {name}, surname {surname}</h1>

// 			{/* <a href={props.link}>My Profile</a> */}
// 			<a href={link}>My Profile</a>

// 		</div>
// 	)
// }

class WhoAmI extends Component {
	constructor(props) {
		super(props);
		this.state = {
			years: 27,
			text: "+++",
			position: "",
		};
	}
	nextYear = () => {
		this.setState((state) => ({
			years: state.years + 1,
		}));
	};

	commitInputChanges = (e, color) => {
		console.log(color);
		this.setState({ position: e.target.value });
	};

	render() {
		const { name, surname, link } = this.props;
		const { position, years, text } = this.state;

		return (
			<div>
				<button onClick={this.nextYear}>{text}</button>
				<h1>
					my name is {name}, surname - {surname}, age - {years},
					position - {position}
				</h1>
				<a href={link}>My Profile</a>
				<form>
					<span>Enter position</span>
					<input
						type="text"
						onChange={(e) =>
							this.commitInputChanges(e, "some color")
						}
					/>
				</form>
			</div>
		);
	}
}

function App() {
	return (
		<div className="App">
			<WhoAmI name="Gocho" surname="Kochev" link="facebook.com" />
			<WhoAmI name="Kiro" surname="Falita" link="facebook.com" />
		</div>
	);
}

export { Header };
export default App;
