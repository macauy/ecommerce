import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetail.css";

const ItemDetail = ({ producto, onAdd, navigate, msg }) => {
	return (
		<section className="item-detail-card">
			<div>
				<h4
					className="item-detail-back"
					onClick={() => navigate(-1)}
					title="Back"
				>
					&#60; Go Back
				</h4>
				<img src={producto.image} alt="" className="item-detail-card-img" />
			</div>
			<div className="card-description">
				<h1>{producto.name}</h1>
				<p>{producto.description}</p>
				<h3>U$S {producto.price}</h3>
				{producto.stock > 0 ? (
					<CounterContainer stock={producto.stock} onAdd={onAdd} msg={msg} />
				) : (
					<h5>No hay stock</h5>
				)}
			</div>
		</section>
	);
};

export default ItemDetail;
