import CartWidget from "./CartWidget";
import React from "react";
const Nav = () => {
	return (
		<>
		<header> 
			<h1 id="titulo">GreyRooster</h1>
			<div id="nav">
				<a href="#"><h2> Tienda</h2></a>
				<a href="#"><h2>Nuestras cervezas</h2></a>
				<a href="#"><h2>Merchandising</h2></a>
				<a href="#"><h2>Nosotros</h2></a>
			</div>
		</header>
		<CartWidget/>
		</>
	)
}
export default Nav