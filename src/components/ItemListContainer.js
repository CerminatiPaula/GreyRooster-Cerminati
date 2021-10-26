import React from "react";
const ItemListContainer = (props) => {
	const {nombre, apellido,edad}=props
	return(
		<>
			<h2>Te damos la bienvenida {apellido}, {nombre}</h2>
		</>
	)
}
export default ItemListContainer