import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../../../components/Card/Card';
import { API_KEY } from '../../../constant/Constants';
import useAxios from '../../../hooks/useAxios';

const SimilarRecipes = ({ recipeId }) => {
	const [data, isFetching, isLoading] = useAxios(
		`https://api.spoonacular.com/recipes/${recipeId}/similar?apiKey=${API_KEY}`
	);

	if (isFetching) {
		return <div>Loading.....</div>;
	}
	let recipes = data;

	return (
		<BWrapper>
			<Splide
				options={{
					perPage: 8,
					pagination: false,
					drag: 'free',
					arrows: false,
					autoplay: true,
					interval: 5000,
					rewind: true,
					gap: 10,
				}}
			>
				{recipes?.map((recipe) => (
					<SplideSlide key={recipe.id}>
						<div>
							<Link to={`/recipes/${recipe.id}`}>
								<Card
									imgUrl={`https://spoonacular.com/recipeImages/${recipe.id}-240x150.${recipe.imageType}`}
									title={recipe.title}
									isSimilar={true}
								/>
							</Link>
						</div>
					</SplideSlide>
				))}
			</Splide>
		</BWrapper>
	);
};

export default SimilarRecipes;

const BWrapper = styled.div`
	overflow-x: scroll;
	display: grid;
	place-items: center;
	padding: 0.2em;
	width: 100%;
`;
