import React, { useState } from 'react';
import { Item } from './Item';

export const ItemContainer = (props) => {
	
	const [selectedItem, setSelectedItem] = useState('')

	const handleChange = (e) => {
		// console.log('what does our event look like? ', e)
		// console.log('what does our event target look like? ', e.target)
		// console.log('what does our event target value look like? ', e.target.value)
		// console.log("what item is selected? ", props.items[e.target.value])

		const selected = props.items[e.target.value];
		setSelectedItem(selected)
	}
	
	return (
		<div className="item-container">
		
			{/*	
			Ternary operator!


			(statement) ? render this when true : render this when false
			*/}

			{
				selectedItem ? <Item item={selectedItem} /> : <h3>Select an item plz</h3>
			}
			<br />
			<div>
				<label>Select a Product :</label>
				<select onChange={handleChange}>
					<option value=""></option>
					{
						props.items.map((item, idx) => {
							return <option key={idx} value={idx} >{item.name}</option>
						})
					}
				</select>
			</div>
		</div>
	)
} 
