import React, {useState} from 'react';


export const Cart = (props) => {
	console.log("cart in props ", props.cart)
	return(
		<div>
			Your Cart:
			<br />
			{
				Object.keys(props.cart).map((itemName, idx) => {
					return <div key={idx}><strong>{itemName}: </strong>{props.cart[itemName]}</div>
				})
			}
		</div>
	)
}