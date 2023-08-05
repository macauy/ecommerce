import "./Counter.css";

const Counter = ({ contador, sumar, restar, onAdd, stock, msg }) => {
	return (
		<>
			<div className="product-actions">
				<div className="product-counter-container">
					<div className="product-counter">
						<button className="product-counter-button" onClick={restar}>
							-
						</button>
						<h4>{contador}</h4>
						<button className="product-counter-button" onClick={sumar}>
							+
						</button>
					</div>
					<h5 className="product-available">{stock} available</h5>
				</div>

				<div>
					<button
						className="product-card-button"
						onClick={() => onAdd(contador)}
					>
						Add to Cart
					</button>
				</div>
			</div>
			{msg && <h4 className="product-error-msg">{msg}</h4>}
		</>
	);
};

export default Counter;
