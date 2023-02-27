import "./card.styles.css";

import { Monster } from "../../App";

type CardProps = {
	monster: Monster
}

//!! Function Component

const Card = ({monster}: CardProps) => {
	const { id, email, name } = monster;
	return (
		<div className="card-container" key={id}>
			<img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
		)
}


 export default Card;


 //!! Class Component
// import { Component } from "react";

// class Card extends Component {
// 	render() {
// 		const { id, email, name } = this.props.monster;
// 		return (
// 			<div className="card-container" key={id}>
// 				<img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
// 						<h2>{name}</h2>
// 						<p>{email}</p>
// 			</div>
// 		)
// 	}
// }