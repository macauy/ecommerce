import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import CartWidget from "../../common/cartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Lista de paginas a mostrar en el menu
const pages = [
	{ name: "All", link: "/" },
	{ name: "Headphones", link: "/category/headphones" },
	{ name: "Speakers", link: "/category/speakers" },
	{ name: "Earphones", link: "/category/earphones" },
];

function Navbar() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<header>
			<AppBar position="static" color="transparent">
				<Container maxWidth="false">
					<Toolbar disableGutters>
						{/* Titulo Large  */}
						<Link className="logo" to="/">
							<GraphicEqIcon
								fontSize="medium"
								sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
							/>
							<Typography
								variant="h6"
								noWrap
								component="span"
								sx={{
									mr: 2,
									display: { xs: "none", md: "flex" },
									fontFamily: "monospace",
									fontWeight: 700,
									letterSpacing: ".3rem",
									color: "inherit",
									textDecoration: "none",
								}}
							>
								SOUND STORE
							</Typography>
						</Link>

						{/* Menu Mobile */}
						<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit"
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "left",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: "block", md: "none" },
								}}
							>
								{pages.map((page) => (
									<Link key={page.name} className="header-menu" to={page.link}>
										<MenuItem onClick={handleCloseNavMenu}>
											<Typography textAlign="center">{page.name}</Typography>
										</MenuItem>
									</Link>
								))}
							</Menu>
						</Box>
						{/* Titulo Mobile */}
						<Box sx={{ flexGrow: 1 }}>
							<Link className="logo" to="/">
								<GraphicEqIcon
									fontSize="medium"
									sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
								/>
								<Typography
									variant="h6"
									// wrap
									component="span"
									sx={{
										mr: 0,
										display: { xs: "flex", md: "none" },
										flexGrow: 1,
										fontFamily: "monospace",
										fontWeight: 700,
										letterSpacing: ".1rem",
										color: "inherit",
										textDecoration: "none",
									}}
								>
									SOUND STORE
								</Typography>
							</Link>
						</Box>

						{/* Menu Large */}
						<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
							{pages.map((page) => (
								<Link key={page.name} to={page.link}>
									<Button
										onClick={handleCloseNavMenu}
										sx={{
											my: 2,
											display: "block",
										}}
										color={"inherit"}
									>
										{page.name}
									</Button>
								</Link>
							))}
						</Box>

						{/* Carrito */}
						<Box className="cart-icon" sx={{ mr: 3 }}>
							<CartWidget></CartWidget>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</header>
	);
}
export default Navbar;
