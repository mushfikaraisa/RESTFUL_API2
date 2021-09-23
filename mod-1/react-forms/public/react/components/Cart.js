import React, {useState} from 'react';


export const Cart = (props) => {
	
	const [card, setCard] = useState({type : '', ccn : ''});
	const [message, setMessage] = useState('')

	function handleCCN(e){
		// console.log("ccn change event target", e.target.value)

		const updatedCard = card;
		updatedCard.ccn = e.target.value

		setCard(updatedCard)
		// console.log("CARD ON STATE", card)
	}

	function handleType(e){
		const updatedCard = card;
		updatedCard.type = e.target.value
		setCard(updatedCard)

		console.log("PAYMENT TYPE ", card)
	}

	function handleSubmit(e){
		e.preventDefault() // prevents refresh in all browsers
		setMessage(`PAYMENT SUBMITTED TO ${card.type} #${card.ccn}`)
	}

	return(
		<div>
			Your Cart:
			<br />
			{
				Object.keys(props.cart).map((itemName, idx) => {
					return <div key={idx}><strong>{itemName}: </strong>{props.cart[itemName]}</div>
				})
			}
			<br />
			{
				message ? message : (
					<form onSubmit={handleSubmit}>
						<div>
							<label>CCN: </label>
							<input type="text" name="ccn" onChange={handleCCN} />
						</div>
						< br />
						<div>
							<label>Payment Type: </label>
							<select onChange={handleType}>
								<option></option>
								<option>Visa</option>
								<option>Amex</option>
								<option>Bitcoin</option>
							</select>
						</div>
						<button type="submit" className="btn">Submit Order</button>
					</form>
				)
			}
			
		</div>
	)
}