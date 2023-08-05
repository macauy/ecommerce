import { Link } from "react-router-dom";
import { db } from "../../../firebaseconfig";
import { products } from "../../../ProductsMock";
import { addDoc, collection } from "firebase/firestore";

const Dashboard = () => {
	const loadProducts = () => {
		products.forEach((item) => {
			let refProducts = collection(db, "products");
			addDoc(refProducts, item);
		});
	};

	return (
		<div style={{ display: "flex", justifyContent: "center", margin: "50px" }}>
			<Link to="/">
				<button className="product-card-button" onClick={loadProducts}>
					Load products
				</button>
			</Link>
		</div>
	);
};

export default Dashboard;
