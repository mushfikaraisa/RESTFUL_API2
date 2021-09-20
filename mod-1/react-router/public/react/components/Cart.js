import React, {useState} from 'react';


export const Cart = (props) => {
	console.log("cart in props ", props.cart)
	return(
		<div>
			Your Cart:
			<br />
			{
				Object.keys(props.cart).map((cartItem, idx) => {
					return <div key={idx}><strong>{cartItem}: </strong>{props.cart[cartItem]}</div>
				})
			}
		</div>
	)
}