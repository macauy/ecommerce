import { Skeleton } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";
import "./ItemList.css";

const ItemList = ({ items }) => {
	let arr = [1, 2, 3];
	return (
		<section className="item-list-container">
			{items.length > 0 ? (
				<>
					{items.map((item) => (
						<ProductCard item={item} isItemList={true} key={item.id} />
					))}
				</>
			) : (
				arr.map((e) => {
					return (
						<div key={e}>
							<Skeleton variant="rectangular" width={200} height={200} />
							<Skeleton
								variant="text"
								sx={{ fontSize: "1.3rem" }}
								width={150}
								height={50}
							/>
							<Skeleton
								variant="text"
								sx={{ fontSize: "1rem" }}
								width={200}
								height={300}
							/>
						</div>
					);
				})
			)}
		</section>
	);
};

export default ItemList;
