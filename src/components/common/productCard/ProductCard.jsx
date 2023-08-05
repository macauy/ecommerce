import {
	Card,
	Button,
	// CardActions,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ item, isItemList = true }) => {
	return (
		<Card className="product-card" key={item.id}>
			<CardMedia component="img" image={item.image} title={item.title} />
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{item.name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{item.description}
				</Typography>
			</CardContent>

			{isItemList ? (
				<Link to={`/item/${item.id}`}>
					<div className="button-container">
						<button size="small" className="product-card-button">
							View Details
						</button>
					</div>
				</Link>
			) : (
				<Button className="product-card-button" size="small">
					Eliminar
				</Button>
			)}
		</Card>
	);
};

export default ProductCard;
