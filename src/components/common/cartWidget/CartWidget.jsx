import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
	const { cart } = useContext(CartContext);
	return (
		<Link to="/cart">
			<IconButton sx={{ width: 45 }} aria-label="cart">
				<Badge
					badgeContent={cart.reduce((sum, item) => sum + item.quantity, 0)}
					color="error"
				>
					<ShoppingCartOutlinedIcon color="action" sx={{ color: "black" }} />
				</Badge>
			</IconButton>
		</Link>
	);
};

export default CartWidget;
