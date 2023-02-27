import Card from "../card/card.component";
import "./card-list.styles.css";

import { Monster } from "../../App";

type CardListProps = {
	monsters: Monster[]
}


//! Function Component

const CardList = ({ monsters } : CardListProps) => (
	<div className="card-list">
		{monsters.map((monster) => {
			return <Card monster={monster} />			
		})}
	</div>
)

export default CardList;





//!Class Component

// import { Component } from "react";


// class CardList extends Component {
// 	render() {

// 		const { monsters } = this.props;

// 		return (
// 			<div className="card-list">
// 				{monsters.map((monster) => {
// 					return (
// 						<Card monster={monster} />
					
// 				)})}
// 			</div>
// 		)
// 	}
// }
