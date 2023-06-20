import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const CartWidget = () => {
	return (
		<>
			<IconButton aria-label="cart">
				<Badge badgeContent={1} color="error">
					<ShoppingCartOutlinedIcon color="action" sx={{ color: "black" }} />
				</Badge>
			</IconButton>
		</>
	);
};

export default CartWidget;
