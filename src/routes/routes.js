import ItemDetailContainer from "../components/pages/itemDetail/ItemDetailContainer";
import ItemListContainer from "../components/pages/itemList/ItemListContainer";
import Cart from "../components/pages/cart/Cart";
import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";
import Dashboard from "../components/pages/dashboard/Dashboard";

export const routes = [
	{
		id: "home",
		path: "/",
		Element: ItemListContainer,
	},
	{
		id: "categories",
		path: "/category/:categoryName",
		Element: ItemListContainer,
	},
	{
		id: "item",
		path: "/item/:id",
		Element: ItemDetailContainer,
	},
	{
		id: "cart",
		path: "/cart",
		Element: Cart,
	},
	{
		id: "checkout",
		path: "/checkout",
		Element: CheckoutContainer,
	},
	{
		id: "checkout",
		path: "/checkout",
		Element: CheckoutContainer,
	},
	{
		id: "dashboard",
		path: "/dashboard",
		Element: Dashboard,
	},
];
