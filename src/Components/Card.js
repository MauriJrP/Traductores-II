import { useState } from 'react';

function Card({ field, id }) {
	const [result, setResult] = useState(0);

	const checkField = () => {
		if (id === 'email') checkEmail();
		else if (id === 'ipAddress') checkIpAddress();
		else if (id === 'date') checkDate();
		else if (id === 'phone') checkPhone();
		else if (id === 'url') checkUrl();
		else if (id === 'time') checkTime();
	};

	const checkEmail = () => {
		let input = document.getElementById(id).value;
		const reg =
			/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
		setResultEvent(input, reg);
	};
	const checkIpAddress = () => {
		let input = document.getElementById(id).value;
		const reg =
			/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
		setResultEvent(input, reg);
	};
	const checkDate = () => {
		let input = document.getElementById(id).value;
		const reg = /^(0?[1-9]|1[0-2])[\/](0?[1-9]|[12]\d|3[01])[\/](19|20)\d{2}$/;
		setResultEvent(input, reg);
	};
	const checkPhone = () => {
		let input = document.getElementById(id).value;
		const reg = /^\+52\d{10}$/;
		setResultEvent(input, reg);
	};
	const checkUrl = () => {
		let input = document.getElementById(id).value;
		const reg =
			/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
		setResultEvent(input, reg);
	};
	const checkTime = () => {
		let input = document.getElementById(id).value;
		const reg = /([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?/g;
		setResultEvent(input, reg);
	};

	const setResultEvent = (input, reg) => {
		if (input.match(reg)) {
			setResult(1); // Success
			setTimeout(() => {
				setResult(0);
			}, 4000);
		} else {
			setResult(2); // Error
			setTimeout(() => {
				setResult(0);
			}, 4000);
		}
	};

	return (
		<div className="p-2 flex flex-col h-48 items-center justify-around  bg-slate-700 shadow-lg shadow-slate-600 rounded">
			<p className="font-bold text-3xl text-center block text-white">{field}</p>
			<input
				id={id}
				type="text"
				className="outline-0 bg-gradient-to-b from-transparent to-stone-300 to-stone-500 p-2 rounded w-3/4"
			/>
			{result === 1 ? (
				<p className="text-green-500 text-center font-bold">Correcto!</p>
			) : null}
			{result === 2 ? (
				<p className="text-red-600 text-center font-bold">Error!</p>
			) : null}
			<div
				className="outline-0 w-3/4 px-4 py-2 bg-success hover:bg-success-dark font-bold text-center hover:cursor-pointer"
				onClick={checkField}
			>
				Comprobar
			</div>
		</div>
	);
}

export default Card;
