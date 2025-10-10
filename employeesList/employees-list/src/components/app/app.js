import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import "./app.css";
// import { keyboard } from "@testing-library/user-event/dist/keyboard";

function App() {
	const data = [
		{ name: "Gocho K.", salary: 800, increase: false, id:1},
		{ name: "Docho M.", salary: 3000, increase: true, id:2},
		{ name: "Bocho S.", salary: 15000, increase: false, id:3},
	];
	return (
		<div className="app">
			<AppInfo />

			<div className="search-panel">
				<SearchPanel />
				<AppFilter />
			</div>

			<EmployeesList data={data} />
			<EmployeesAddForm />
		</div>
	);
}

export default App;
