import './input.css';
import Clock from './components/clock';
import Form from './components/form';
import { LoginControl } from './components/greeting';

function App() {
	return (
		<div className="flex justify-center">
			<div className="flex-column text-2xl">
				<Clock />
				<Form />
				<LoginControl />
			</div>
		</div>
	);
}

export default App;
