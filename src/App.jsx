import Layout from "./components/layout/Layout";
import Cart from "./components/pages/cart/Cart";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	// let saludo = "Bienvenidos a la tiendita";
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route path="/" element={<ItemListContainer />}></Route>
						<Route
							path="/category/:categoryName"
							element={<ItemListContainer />}
						></Route>
						<Route path="/cart" element={<Cart />}></Route>
						<Route path="/item/:id" element={<ItemDetailContainer />}></Route>
						<Route path="/checkout" element={<h1>Checkout</h1>}></Route>
					</Route>
					<Route path="*" element={<h1>Not found</h1>}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
