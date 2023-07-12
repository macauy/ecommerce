import "./Counter.css";

const Counter = ({ contador, sumar, restar, onAdd }) => {
	return (
		<div className="product-actions">
			<div className="product-counter">
				<button className="product-counter-button" onClick={restar}>
					-
				</button>
				<h4>{contador}</h4>
				<button className="product-counter-button" onClick={sumar}>
					+
				</button>
			</div>

			<button
				className="product-actions-button"
				onClick={() => onAdd(contador)}
			>
				Agregar al carrito
			</button>
		</div>
	);
};

export default Counter;
