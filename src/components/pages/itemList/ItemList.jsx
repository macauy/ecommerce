import { Box } from "@mui/material";

const ItemList = ({ saludo }) => {
	return (
		<Box sx={{ display: "flex", justifyContent: "center", marginTop: "70px" }}>
			<h2>{saludo}</h2>
		</Box>
	);
};

export default ItemList;
