import React, { useState } from 'react';

const backgroundImg = (item) => (`img/${item.name}.gif`);

export const Item = (props) => {
	// add heat hooks here
	const [ heat, setHeat ] = useState(['🔥'])


//DEMO
	function addHeat () {
		setHeat([...heat,'🔥'])
		console.log(heat)
	}

//REMOVE HEAT

	console.log("Props passed in to item: ", props)
	return (
		<div>
			<img className="item-img" src={props.item.image} />
				{heat.map( (pepper) => {
					return pepper
				})}
				<button onClick={addHeat}>Add Heat</button>
		</div>

		)
}
	