/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { products } from "../../../ProductsMock";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
	const [items, setItems] = useState([]);
	const { categoryName } = useParams();

	useEffect(() => {
		let filterProducts = products.filter(
			(item) => item.category == categoryName
		);
		const tarea = new Promise((resolve, reject) => {
			resolve(categoryName == undefined ? products : filterProducts);
		});

		tarea
			.then((respuesta) => setItems(respuesta))
			.catch((error) => console.log(error));
	}, [categoryName]);

	return <ItemList items={items}></ItemList>;
};

export default ItemListContainer;
