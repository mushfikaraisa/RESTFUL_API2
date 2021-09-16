import React, { useState } from 'react';

const backgroundImg = (item) => (`img/${item.name}.gif`);

export const Item = (props) => {
	// add heat hooks here

//DEMO
// add heat function here

//REMOVE HEAT

	console.log("Props passed in to item: ", props)
	return (
		<div>
			<img className="item-img" src={props.item.image} />

{/* How can we display all the heat icons? */}

				<button onClick={() => addHeat()}>Add Heat</button>
		</div>

		)
}
	