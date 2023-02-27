import "./search-box.styles.css";


//! Class Component 

// import { Component } from "react";

// class SearchBox extends Component {

// 	render() {
// 		return (
// 			<input className={`search-box ${this.props.className}`}    // это ${this.props.className}` превращается в имя класса, смотри в App.js
// 					type="search"
// 					placeholder={this.props.placeholder}
// 					onChange={ this.props.onChangeHandler}
// 			/>
// 		)
// 	}
// }

//! Function Component 

const SearchBox = ({className, placeholder,onChangeHandler}) => (
	<input className={`search-box ${className}`}    // это ${this.props.className}` превращается в имя класса, смотри в App.js
		type="search"
		placeholder={placeholder}
		onChange={onChangeHandler}
	/>
)

export default SearchBox;