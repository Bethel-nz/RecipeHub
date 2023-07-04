import React from 'react';
import CardStyle from './CardStyle';

const Card = ({ imgUrl, title, isSimilar }) => {
	return (
		<CardStyle isSimilar={isSimilar}>
			<img src={imgUrl} alt={title} />
			<p>{title}</p>
		</CardStyle>
	);
};

export default Card;
