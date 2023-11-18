import React from 'react';
import Icon from './Icon';
import duaicon from '../duaicons.json';

const App: React.FC = () => {
	return (
		<div>
			<h1>Icon App</h1>
			{duaicon.items.map((item, index) => (
				<div key={index}>
					<h2>{item.name} Icon</h2>
					<Icon
						icon={React.createElement('div', { dangerouslySetInnerHTML: { __html: item.content } })}
					/>
				</div>
			))}
		</div>
	);
};

export default App;
