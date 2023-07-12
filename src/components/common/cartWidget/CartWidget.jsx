import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

const CartWidget = () => {
	return (
		<>
			<Link to="/cart">
				<IconButton sx={{ width: 45 }} aria-label="cart">
					<Badge badgeContent={1} color="error">
						<ShoppingCartOutlinedIcon color="action" sx={{ color: "black" }} />
					</Badge>
				</IconButton>
			</Link>
		</>
	);
};

export default CartWidget;
