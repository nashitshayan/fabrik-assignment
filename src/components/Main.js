import React from 'react';
import Card from './Card';

function Main({ models, isClickHandler }) {
	const cards = models.map((model, index) => (
		<Card
			model={model}
			isClickHandler={isClickHandler}
			id={index}
			key={index}
		/>
	));
	return <main>{cards}</main>;
}

export default Main;
