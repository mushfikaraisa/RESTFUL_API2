import React, { useState, useEffect } from 'react';
import {
	Route,
	Link
} from "react-router-dom";

import { ItemContainer } from './ItemContainer';
import { Cart } from './Cart';

export const App = () => {
	// Setting our default states

	const [sauces, setSauces] = useState([])
	const [message, setMessage] = useState('🔥')
	const [cart, setCart] = useState({})


	function handleClick(e) {
		const updatedMessage = message + '🔥';
		setMessage(updatedMessage)
	}

	async function fetchSauces(){
		try {
			const response = await fetch('http://localhost:3000/sauces');
			const responseJSON = await response.json();
			setSauces(responseJSON)
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	function addItem(item) {
		//adds item to cart
		const itemsOnCart = Object.keys(cart)
		//create cart obj with update
		const updatedCart = Object.assign({}, cart);

		if(itemsOnCart.indexOf(item.name) != -1) {
			updatedCart[item.name] += 1  //if we already have item in cart, add to the count
		} else {
			updatedCart[item.name] = 1 // if we dont have item, it's our first time adding it
		}

		setCart(updatedCart)
	}

	useEffect(() => {
		fetchSauces()
	}, []);

	return (
		<div>	
			<h2 id="header-small" onClick={handleClick}>A Somewhat { message } Site</h2>
			<nav>
				<Link to="/sauces">
					<button className="btn">Get Spicy</button>
				</Link>
				<Link to="/cart">
					<button className="btn">See Cart</button>
				</Link>
			</nav>
			<Route path="/sauces">
				<ItemContainer items={sauces} addItem={addItem} />
			</Route>
			<Route path="/cart">
				<Cart cart={cart}/>
			</Route>
		</div>
	)
}




