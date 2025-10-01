import "./app-filter.css";

const AppFilter = () => {
	return (
		<div className="btn-group">
			<button className="btn btn-light" type="button">
				All employees
			</button>
			<button className="btn btn-light-outline-light" type="button">
				For Promotion
			</button>
			<button className="btn btn-light-outline-light" type="button">
				Salary over $1000
			</button>
		</div>
	);
};
export default AppFilter;
