import React, { useState, useEffect } from 'react';
import { ItemContainer } from './ItemContainer';
// need to import our functional component + class component

export const App = () => {

	const [sauces, setSauces] = useState([])

	

	async function fetchSauces(){
		try {
			const response = await fetch('http://localhost:3000/sauces');
			const responseJSON = await response.json();
			setSauces(responseJSON)
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchSauces()
	}, []);

	console.log("SAUCES ON STATE ", sauces)
	return (
		<div>	
			<h1>A Somewhat { message } Site</h1>
			<div className="clearfix">
				<div className="block">
					{/* add components here */}
					<ItemContainer items={sauces} />
				</div>
			</div>
		</div>
	)
}