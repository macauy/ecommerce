import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ stock, onAdd, msg }) => {
	const [contador, setContador] = useState(1);

	const sumar = () => {
		contador < stock && setContador(contador + 1);
	};

	const restar = () => {
		contador > 1 && setContador(contador - 1);
	};

	return (
		<Counter
			contador={contador}
			sumar={sumar}
			restar={restar}
			onAdd={onAdd}
			stock={stock}
			msg={msg}
		/>
	);
};

export default CounterContainer;
