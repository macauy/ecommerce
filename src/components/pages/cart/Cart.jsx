import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import "./Cart.css";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "../../common/cartItem/CartItem";

const Cart = () => {
	const { cart, clearCart, getTotalItems, getTotalPrice } =
		useContext(CartContext);

	const navigate = useNavigate();

	return (
		<div className="cart">
			<div className="cart-container">
				<h4 className="cart-back" onClick={() => navigate(-1)} title="Back">
					&#60; Go Back{" "}
				</h4>

				{cart.length > 0 ? (
					<>
						<div className="cart-header">
							<h3>CART ({getTotalItems()})</h3>

							<h4
								className="cart-remove"
								onClick={clearCart}
								title="Remove all"
							>
								Remove All
							</h4>
						</div>
						<CartItem items={cart} isCart={true} />

						<div className="cart-total">
							<h3>Total </h3>
							<h3>{getTotalPrice()}</h3>
						</div>

						<Link to="/checkout">
							<button type="submit" className="product-card-button cart-button">
								CHECKOUT
							</button>
						</Link>
					</>
				) : (
					<div className="cart-no-items">
						<h3>No items here!</h3>
						<Link to="/">
							<button type="submit" className="product-card-button">
								Go Shopping
							</button>
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default Cart;
