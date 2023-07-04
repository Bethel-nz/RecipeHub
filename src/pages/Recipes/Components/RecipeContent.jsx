import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../../../components/Card/Card';
import { SkeletonCard } from '../../../components/Card/CardStyle';
import { API_KEY } from '../../../constant/Constants';
import useAxios from '../../../hooks/useAxios';

const RecipeContent = ({ tags }) => {
	const [data, isFetching, isLoading] = useAxios(
		`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=15&tags=${tags}`
	);
	let recipes = data?.recipes;

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

export default RecipeContent;

const Wrapper = styled.div`
	overflow-y: scroll;
	padding: 0.5em;
	display: grid;
	place-items: center;
	gap: 0.5em;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	overflow: hidden;
`;
