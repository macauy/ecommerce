import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import "./CartItem.css";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { IconButton } from "@mui/material";

const CartItem = ({ items, isCart = false }) => {
	const { deleteFromCart } = useContext(CartContext);

	return (
		<section className="cart-item-container">
			{items.map((item) => (
				<div key={item.id} className="cart-item">
					<div className="cart-item-item">
						<img
							src={item.image}
							alt={item.name}
							title={item.name}
							style={{ width: "100px" }}
						/>
						<div className="">
							<h4>{item.name}</h4>
							<h4 className="cart-item-quantity">X {item.quantity}</h4>
							<h5>$ {item.price * item.quantity}</h5>
						</div>
					</div>
					{isCart && (
						<IconButton
							aria-label="cart"
							title="Remove from cart"
							onClick={() => deleteFromCart(item.id)}
						>
							<DeleteOutlinedIcon />
						</IconButton>
					)}
				</div>
			))}
		</section>
	);
};

export default CartItem;
