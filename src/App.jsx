import Header from "./components/Header.jsx";
import Article from "./components/Article";
import data from "./data.js";

function App() {
	// console.log(data);
	const result = data.map((item, index) => {
		return (
			<div key={item.id}>
				<Article {...item} />
				{index !== data.length - 1 && <hr />}
			</div>
		);
	});
	return (
		<>
			<Header />
			{result}
		</>
	);
}

export default App;
