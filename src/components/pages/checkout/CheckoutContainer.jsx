import {
	addDoc,
	collection,
	doc,
	serverTimestamp,
	updateDoc,
} from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseconfig";
import { Link } from "react-router-dom";

import { Box, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./CheckoutContainer.css";
import CartItem from "../../common/cartItem/CartItem";

const CheckoutContainer = () => {
	const [orderId, setOrderId] = useState("");

	const { handleSubmit, handleChange, errors } = useFormik({
		initialValues: {
			name: "",
			phone: "",
			email: "",
		},
		onSubmit: (data) => {
			let order = {
				buyer: data,
				items: cart,
				// total,
				date: serverTimestamp(),
			};

			// Crear orden en base
			const refOrders = collection(db, "orders");
			addDoc(refOrders, order).then((res) => setOrderId(res.id));

			// Modificar stock de los productos
			cart.forEach((item) => {
				updateDoc(doc(db, "products", item.id), {
					stock: item.stock - item.quantity,
				});
			});

			// Vaciar carrito
			clearCart();
		},
		validateOnChange: false,
		validationSchema: Yup.object({
			name: Yup.string().required(),
			email: Yup.string().email("Wrong format").required(),
			phone: Yup.number().required().typeError("Invalid phone number"),
			address: Yup.string().required(),
			city: Yup.string().required(),
			country: Yup.string().required(),
			zipcode: Yup.string()
				.required()
				.matches(/^[0-9]+$/, "Incorrect format, number expected")
				.min(5, "Incorrect format, 5 digits expected")
				.max(5, "Incorrect format, 5 digits expected"),
		}),
	});

	const { cart, clearCart, getTotalPrice } = useContext(CartContext);

	return (
		<div className="checkout">
			<Box className="checkout-box">
				{orderId ? (
					<Grid container className="checkout-container">
						<Grid
							item
							className="checkout-container-item checkout-confirm-box"
							xs={10}
							md={9}
							xl={8}
						>
							<h2 className="checkout-subtitle">Thanks for your order!</h2>
							<h4>Order ID: {orderId}</h4>
							<h4 className="checkout-message">
								You will receive an email confirmation shortly.
							</h4>
							<CartItem items={cart} />
							<Link to="/">
								<button
									type="submit"
									className="product-card-button"
									style={{ minWidth: "50%", marginBottom: "30px" }}
								>
									BACK TO HOME
								</button>
							</Link>
						</Grid>
					</Grid>
				) : (
					<form onSubmit={handleSubmit}>
						<Grid container className="checkout-container" spacing={3}>
							<Grid
								item
								className="checkout-container-item"
								xs={10}
								md={6}
								sx={{ marginBottom: "20px", paddingBottom: "20px" }}
							>
								<h2>CHECKOUT</h2>
								<h5 className="checkout-subtitle">BILLING DETAILS</h5>
								<Grid container spacing={2}>
									<Grid item xs={12} sm={8} md={5} sx={{ width: "100%" }}>
										<TextField
											type="text"
											label="Name"
											variant="outlined"
											name="name"
											onChange={handleChange}
											error={errors.name ? true : false}
											helperText={errors.name}
											className="checkout-textfield"
										/>
									</Grid>

									<Grid item xs={12} sm={8} md={5} sx={{ width: "100%" }}>
										<TextField
											type="text"
											label="Phone Number"
											variant="outlined"
											name="phone"
											onChange={handleChange}
											error={errors.phone ? true : false}
											helperText={errors.phone}
											className="checkout-textfield"
										/>
									</Grid>
									<Grid item xs={12} sm={8} md={10} sx={{ width: "100%" }}>
										<TextField
											type="text"
											label="Email Address"
											variant="outlined"
											name="email"
											onChange={handleChange}
											error={errors.email ? true : false}
											helperText={errors.email}
											className="checkout-textfield"
										/>
									</Grid>
								</Grid>
								<h5 className="checkout-subtitle">SHIPPING INFO</h5>
								<Grid container spacing={2}>
									<Grid item xs={12} sm={8} md={10} sx={{ width: "100%" }}>
										<TextField
											type="text"
											label="Address"
											variant="outlined"
											name="address"
											onChange={handleChange}
											error={errors.address ? true : false}
											helperText={errors.address}
											className="checkout-textfield"
										/>
									</Grid>
									<Grid item xs={12} sm={8} md={5} sx={{ width: "100%" }}>
										<TextField
											type="text"
											label="Zip Code"
											variant="outlined"
											name="zipcode"
											onChange={handleChange}
											error={errors.zipcode ? true : false}
											helperText={errors.zipcode}
											className="checkout-textfield"
										/>
									</Grid>
									<Grid item xs={12} sm={8} md={5} sx={{ width: "100%" }}>
										<TextField
											type="text"
											label="City"
											variant="outlined"
											name="city"
											onChange={handleChange}
											error={errors.city ? true : false}
											helperText={errors.city}
											className="checkout-textfield"
										/>
									</Grid>
									<Grid item xs={12} sm={8} md={5} sx={{ width: "100%" }}>
										<TextField
											type="text"
											label="Country"
											variant="outlined"
											name="country"
											onChange={handleChange}
											error={errors.country ? true : false}
											helperText={errors.country}
											className="checkout-textfield"
										/>
									</Grid>
								</Grid>
							</Grid>
							<Grid
								item
								className="checkout-container-item"
								xs={10}
								md={5}
								xl={4}
							>
								<h4>SUMMARY</h4>
								<CartItem items={cart} />
								<div className="cart-total">
									<h3>Total </h3>
									<h3>{getTotalPrice()}</h3>
								</div>
								<button
									type="submit"
									className="product-card-button"
									style={{ minWidth: "100%" }}
								>
									Continue & Pay
								</button>
							</Grid>
						</Grid>
					</form>
				)}
			</Box>
		</div>
	);
};

export default CheckoutContainer;
