import ProductCard from "../../common/productCard/ProductCard";
import "./ItemList.css";

const ItemList = ({ items }) => {
	return (
		<section className="item-list-container">
			{items.map((item) => (
				<ProductCard item={item} isItemList={true} key={item.id} />
			))}
		</section>
	);
};

export default ItemList;
