import Navbar from "./components/layout/navbar/Navbar";
import ItemList from "./components/pages/itemList/ItemList";

function App() {
	let saludo = "Bienvenidos a la tiendita";
	return (
		<>
			<Navbar />
			<ItemList saludo={saludo}></ItemList>
		</>
	);
}

export default App;
