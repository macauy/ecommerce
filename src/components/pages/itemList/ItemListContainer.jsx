/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
	const [items, setItems] = useState([]);
	const { categoryName } = useParams();

	useEffect(() => {
		const refProducts = collection(db, "products");

		let consulta;
		if (categoryName) {
			consulta = query(refProducts, where("category", "==", categoryName));
		} else {
			consulta = refProducts;
		}
		getDocs(consulta).then((res) => {
			let products = res.docs.map((item) => ({ ...item.data(), id: item.id }));
			setItems(products.sort((a, b) => a.slug.localeCompare(b.slug)));
		});
	}, [categoryName]);

	return <ItemList items={items}></ItemList>;
};

export default ItemListContainer;
