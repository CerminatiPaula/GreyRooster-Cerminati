import CartWidget from "./CartWidget"
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
			<CartWidget/>
		</header>
		
		</>
	)
}
export default Nav