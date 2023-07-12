import { Typography } from "@mui/material";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import "./Footer.css";

const Footer = () => {
	return (
		<footer>
			<GraphicEqIcon fontSize="large" sx={{}} />
			<Typography
				className="logo"
				variant="h6"
				noWrap
				component="span"
				sx={{
					display: "flex",
					fontFamily: "monospace",
					fontWeight: 700,
					letterSpacing: { xs: ".1rem", md: ".3rem" },
					color: "inherit",
					textDecoration: "none",
				}}
			>
				SOUND STORE
			</Typography>
			<p>Copyright 2023. All Rights Reserved</p>
		</footer>
	);
};

export default Footer;
