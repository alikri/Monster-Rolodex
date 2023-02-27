// import { Component } from "react";

import { useState, useEffect } from 'react';

import './App.css';
import SearchBox from "./components/search-box/search-box-component";
import CardList from "./components/card-list/card-list-component";

const App = () => {
	
	const [searchField, setSearchField] = useState(""); // [value, setValue -!!это функция]
	
	const [monsters, setMonsters] = useState([]);
	const [filteredMonsters, setFilteredMonsters] = useState(monsters);

	console.log("rendered");
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => setMonsters(users));
	}, []);

	useEffect(() => {
		const newFilteredMonsters = monsters.filter(
			(monster) => {
				return monster.name.toLocaleLowerCase().includes(searchField);
			})
		setFilteredMonsters(newFilteredMonsters);
	}, [monsters, searchField])


	const onSearchChange = (event) => {
		console.log(event);
		const searchFieldString = event.target.value.toLocaleLowerCase(); // console.log(event.target.value) тут в консоле видно что value это конкретно то что мы вводим в инпут
		setSearchField(searchFieldString);
	}

	return (
		<div className="App">

			<h1 className="app-title">Monsters Rolodex</h1>

			<SearchBox
				onChangeHandler={onSearchChange}
				placeholder="search monsters"
				className="monsters-search-box"  //это и есть класс к которому можно применять стили, смотри как он записан в компоненте
			/>
			< CardList monsters={filteredMonsters} />
		</div>
	);
}

// class App extends Component {
// 	constructor() {
// 		super();

// 		this.state = {
// 			monsters: [],
// 			searchField: " ",
// 		};
// 	}

// 	componentDidMount() {
// 		fetch('https://jsonplaceholder.typicode.com/users')
// 		.then((response) => response.json())
// 			.then((users) => 
// 				this.setState(
// 					() => {
// 						return { monsters: users };
// 					},
// 					() => {
// 						console.log(this.state);
// 					}
					
// 				) 
// 			)
// 	}

// 	onSearchChange = (event) => {
// 		const searchField = event.target.value.toLocaleLowerCase();
// 			// console.log(event.target.value) тут в консоле видно что value это конкретно то что мы вводим в инпут
// 		this.setState(() => {
// 				return { searchField }
// 			})
// 		}

	

// 	render() {
// 		const { searchField, monsters, } = this.state;
// 		const { onSearchChange } = this;

// 		const filteredMonsters = monsters.filter(
// 			(monster) => {
// 				return monster.name.toLocaleLowerCase().includes(searchField);
// 			})
// 		return (
// 			<div className="App">
// 				<h1 className="app-title">Monsters Rolodex</h1>
				
// 				<SearchBox
// 					onChangeHandler={onSearchChange}
// 					placeholder="search monsters"
// 					className="monsters-search-box"  //это и есть класс к которому можно применять стили, смотри как он записан в компоненте
// 				/>
// 				< CardList monsters={filteredMonsters} />
// 			</div>
// 		  );
// 	}
// }

export default App;
