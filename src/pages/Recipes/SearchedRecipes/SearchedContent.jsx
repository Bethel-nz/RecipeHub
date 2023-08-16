import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../../../components/Card/Card';
import { SkeletonCard } from '../../../components/Card/CardStyle';
import useAxios from '../../../hooks/useAxios';

import { useParams } from 'react-router-dom';
import { API_KEY } from '../../../constant/Constants';

const SearchedContent = () => {
	const params = useParams();
	console.log(params.searched);
	const [data, isFetching, isLoading] = useAxios(
		`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${params.searched}`
	);
	let recipes = data.results;
	console.log(data);

	const skeletonCards = Array.from({ length: 15 }, (_, index) => (
		<SkeletonCard key={index} />
	));

	return (
		<>
			{isLoading || isFetching ? (
				<Wrapper>{skeletonCards}</Wrapper>
			) : (
				<Wrapper>
					{recipes?.map((recipe) => {
						return (
							<div key={recipe.id}>
								<Link to={`/recipes/${recipe.id}`}>
									<Card imgUrl={recipe.image} title={recipe.title} />
								</Link>
							</div>
						);
					})}
				</Wrapper>
			)}
		</>
	);
};

export default SearchedContent;

const Wrapper = styled.div`
	overflow-y: scroll;
	padding: 0.5em;
	display: grid;
	place-items: center;
	gap: 0.5em;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	overflow: hidden;
`;
