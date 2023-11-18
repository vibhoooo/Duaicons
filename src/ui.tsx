import * as React from "react";
import * as ReactDOM from "react-dom/client";
import duaicon from './duaicons.json';

declare function require(path: string): any;

interface IconProps extends React.SVGProps<SVGSVGElement> {
	icon: React.ReactNode;
}

const Icon: React.FC<IconProps> = ({ icon, ...props }) => (
	<svg {...props}>
		{icon}
	</svg>
);

function App() {
	const inputRef = React.useRef<HTMLInputElement>(null);

	const onCreate = () => {
		const count = Number(inputRef.current?.value || 0);
		parent.postMessage(
			{ pluginMessage: { type: "create-rectangles", count } },
			"*"
		);
	};

	const onCancel = () => {
		parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
	};

	return (
		<main>
			<header>
				<div>
					{duaicon.items.map((item, index) => (
						<Icon
							key={index}
							icon={React.createElement('div', { dangerouslySetInnerHTML: { __html: item.content } })}
						/>
					))}
				</div>
				<h2>Rectangle Creator</h2>
			</header>
			<section>
				<input id="input" type="number" min="0" ref={inputRef} />
				<label htmlFor="input">Rectangle Count</label>
			</section>
			<footer>
				<button className="brand" onClick={onCreate}>
					Create
				</button>
				<button onClick={onCancel}>Cancel</button>
			</footer>
		</main>
	);
}

ReactDOM.createRoot(document.getElementById("react-page")).render(<App />);
