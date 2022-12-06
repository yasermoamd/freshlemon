import { useState } from "preact/hooks";

interface CounterProps {
	start: number;
}

function Counter(props: CounterProps) {
	const [count, setCount] = useState(props.start);
	const increment = () => setCount(count + 1);

	return (
		<div>
			Current value: {count}
			<button onClick={increment}>Increment</button>
		</div>
	);
}

export default Counter;
