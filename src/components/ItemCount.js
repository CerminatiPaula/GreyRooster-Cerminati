import React from "react";
import {useState} from "react";
const ItemCount= (props)=>{
	const {initial,stock} = props
	const [contador,setContador] = useState(parseInt(initial))
	const sumarContador = ()=>{
		if (contador < stock){
			setContador(contador+1)
		} 
		else{
			setContador(contador)
		}
	}	
	const restarContador=()=>{
		if (contador > 1){
			setContador(contador-1)
		} 
		else{
			setContador(contador)
		}
	}
	const onAdd =()=>{
		console.log(contador)
	}
	
	return(
		<>
		<div id="botonera">
			<div className="modificarContador">
				<button onClick={restarContador}>-</button>
				<div className="contador">
					<p>{contador}</p>	
				</div>
				<button onClick={sumarContador}>+</button> 
			</div>
			<div className="agregarCarrito">
				<button onClick={onAdd}>Agregar al carrito</button>
			</div>

			
		</div>
		</>
	)
}
export default ItemCount