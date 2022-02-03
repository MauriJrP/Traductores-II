// import logo from './logo.svg';
import Card from './Components/Card';

function App() {
	return (
		<div className="bg-slate-500 flex flex-col  items-center mx-auto h-screen">
			<h1 className="font-bold text-4xl bg-black w-full text-center text-white p-8">
				Expresiones regulares
			</h1>
			<div className="grid grid-cols-3 grid-rows-2 gap-5 w-full  bg-slate-500 p-5 ">
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
