import './App.css';
import Mensaje from './Mensaje';

const Description = () => {
	return <p>
		Esta es la app del curso de fullstack bootcamp
	</p>
}

const App = () => {
	const a = 2
	const b = 3

	return (
		<div className="App">
			<Mensaje color='lightblue' message='Estamos trabajando '/>
			<Mensaje color='skyblue' message='En un curso'/>
			<Mensaje color='darkblue' message='De react'/>
			<Description />
		</div>
	);
}
	
export default App;
	