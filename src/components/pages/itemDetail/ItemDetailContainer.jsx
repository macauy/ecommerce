/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { products } from "../../../ProductsMock";
import { useNavigate, useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { db } from "../../../firebaseconfig";
import { CartContext } from "../../../context/CartContext";
import { collection, getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
	const [producto, setProducto] = useState({});
	let { id } = useParams();
	const { addToCart, checkStock } = useContext(CartContext);
	const [errorMsg, setErrorMsg] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		const refProduct = doc(db, "products", id);
		getDoc(refProduct).then((res) => {
			setProducto({ ...res.data(), id });
		});
	}, [id]);

	const onAdd = (cant) => {
		console.log(producto.id, cant);
		const { error, msg } = checkStock(producto.id, cant);
		if (error) {
			setErrorMsg(msg);
		} else {
			setErrorMsg("Product added to cart");
			addToCart({ ...producto, quantity: cant });
		}
	};
	return (
		<ItemDetail
			producto={producto}
			onAdd={onAdd}
			navigate={navigate}
			msg={errorMsg}
		/>
	);
};

export default ItemDetailContainer;
