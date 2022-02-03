// import logo from './logo.svg';
import Card from './Components/Card';

function App() {
	return (
		<div className="flex flex-col justify-center items-center mx-auto h-screen">
			<h1 className="font-bold text-3xl bg-black w-3/6 text-center text-white p-3">
				Expresiones regulares
			</h1>
			<div className="grid grid-cols-3 grid-rows-2 gap-4 w-3/6 shadow-lg shadow-stone-500 rounded-b-md bg-slate-500 p-4">
				<Card field="Correo electronico" id="email" />
				<Card field="Direccion IP" id="ipAddress" />
				<Card field="Fecha" id="date" />
				<Card field="Telefono de Mexico" id="phone" />
				<Card field="URL" id="url" />
				<Card field="Hora formato 24hrs" id="time" />
			</div>
		</div>
	);
}

export default App;
