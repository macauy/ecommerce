/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { products } from "../../../ProductsMock";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
	const [producto, setProducto] = useState({});
	let { id } = useParams();

	useEffect(() => {
		let productoSeleccionado = products.find((item) => item.id === +id);

		const tarea = new Promise((resolve, reject) => {
			resolve(productoSeleccionado);
		});
		tarea.then((res) => setProducto(res));
	}, [id]);

	const onAdd = (cant) => {
		// Aca hay que hacer la lógica de agregar al carrito
		console.log("Agregando al carrito ", cant);
	};
	return <ItemDetail producto={producto} />;
};

export default ItemDetailContainer;
