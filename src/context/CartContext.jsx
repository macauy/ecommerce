import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCart = (product) => {
		if (cart.some((item) => item.id === product.id)) {
			let newArray = cart.map((item) => {
				if (item.id === product.id) {
					return { ...item, quantity: item.quantity + product.quantity };
				} else return item;
			});
			setCart(newArray);
		} else {
			setCart([...cart, product]);
		}
	};

	const checkStock = (id, quantity) => {
		const itemCart = cart.find((item) => item.id === id);
		if (itemCart && itemCart.quantity + quantity > itemCart.stock) {
			return {
				error: true,
				msg: "ERROR: You have reached the maximum quantity for this product",
			};
		} else return { error: false };
	};

	const deleteFromCart = (id) => {
		setCart(cart.filter((item) => item.id != id));
	};

	const clearCart = () => {
		setCart([]);
	};

	const getTotalItems = () => {
		return cart.reduce((sum, item) => sum + item.quantity, 0);
	};
	const getTotalPrice = () => {
		return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
	};

	let data = {
		cart,
		addToCart,
		deleteFromCart,
		clearCart,
		getTotalItems,
		getTotalPrice,
		checkStock,
	};

	return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
