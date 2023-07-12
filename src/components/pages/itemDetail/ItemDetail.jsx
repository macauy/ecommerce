import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetail.css";

const ItemDetail = ({ producto }) => {
	const onAdd = (cant) => {
		// Aca hay que hacer la lógica de agregar al carrito
		console.log("Agregando al carrito ", cant);
	};

	return (
		<section className="item-detail-card">
			<img src={producto.image} alt="" />
			<div className="card-description">
				<h1>{producto.name}</h1>
				<p>{producto.description}</p>
				<h3>U$S {producto.price}</h3>
				<CounterContainer stock={producto.stock} onAdd={onAdd} />
			</div>
		</section>
	);
};

export default ItemDetail;
