import React from "react";
import Nav from "./NavBar";
import ItemListContainer from "./ItemListContainer";
import ItemCount from "./ItemCount"
const App = () =>  {
	return (
		//se puede poner todo dentro de una etiqueta vacia. Si no esta la etiqueta vacia tira error
		//la otra opcion es andar haciendo archivos, que es lo que se hace
		<>
			<Nav/>
			<ItemListContainer nombre="Paula" apellido="Cerminati" edad={25}/>
			<ItemCount stock="10" initial="1"/>
		</>
	)
}

export default App