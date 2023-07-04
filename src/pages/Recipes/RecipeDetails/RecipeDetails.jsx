import React from 'react';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { LoadingSkeleton } from '../../../components/Card/CardStyle';
import { API_KEY } from '../../../constant/Constants';
import useAxios from '../../../hooks/useAxios';
import SimilarRecipes from '../Sliders/SimilarRecipes';
const RecipeDetails = () => {
	const { recipeId } = useParams();
	const navigate = useNavigate();
	const [data, isFetching, isLoading] = useAxios(
		`https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=${API_KEY}
`
	);

	return (
		<>
			{isLoading || isFetching ? (
				<LoadingSkeleton />
			) : (
				<Wrapper>
					<div className='header'>
						<button onClick={() => navigate(-1)}>
							<IoIosArrowDropleftCircle color='#7ed147' size={36} />
						</button>
						<h2>{data?.title}</h2>
					</div>
					<div className='details'>
						<div className='dish-type'>
							<p>Dish Type:</p>
							<ul>
								{data?.dishTypes?.map((dish, index) => (
									<li key={index}>{dish}</li>
								))}
							</ul>
						</div>
						<div className='prep-time'>
							<p>Preparation Time:</p>
							<span>
								{data?.preparationMinutes === -1 ? (
									'Unspecified time'
								) : (
									<span>{data?.preparationMinutes + ' ' + 'Minutes'}</span>
								)}
							</span>
						</div>
					</div>
					<section>
						<div className='left-content'>
							<div className='image-container'>
								<img src={data?.image} alt={data?.title} />
							</div>

							<p>
								<h2>Ingredients</h2>
							</p>
							<ul>
								{data?.extendedIngredients?.map((ingredient) => (
									<li>{ingredient?.original}</li>
								))}
							</ul>
						</div>
						<div className='right-content'>
							<p>
								<h3>Steps for preparation</h3>
							</p>
							<ul>
								{data?.analyzedInstructions?.[0]?.steps?.map((step) => (
									<li>{step?.step}</li>
								))}
							</ul>
						</div>
					</section>
					<div className='similar'>
						<p>
							<h3>Similar recipes</h3>
						</p>
						<SimilarRecipes recipeId={recipeId} />
					</div>
				</Wrapper>
			)}
		</>
	);
};

export default RecipeDetails;

const Wrapper = styled.div`
	/* border: 1px solid #9996967d; */
	color: #333333e2;
	height: 100vh;
	padding: 1.5em;
	gap: 0.6em;
	overflow: auto;
	border-radius: 0.5em;
	box-shadow: 0px 0px 10px 1px rgba(17, 17, 26, 0.18);
	.details {
		border-radius: 0.5em;
		box-shadow: 0px 0px 10px 1px rgba(17, 17, 26, 0.18);
		padding: 0.8em;
		width: auto;
		margin-block-end: 0.6em;
	}
	.dish-type {
		margin: 0;
		display: flex;
		align-items: center;
		padding-block: 0.4em;
		p {
			font-weight: bold;
		}
		ul,
		li {
			display: inline-flex;
			list-style-type: none;
			padding-inline: 0.3em;
			align-self: center;
		}
	}
	.prep-time {
		margin: 0;
		display: flex;
		align-items: center;
		padding-block: 0.4em;
		p {
			font-weight: bold;
		}
		span {
			margin-left: 0.5em;
		}
	}
	.header {
		display: flex;
		align-items: center;
		margin-bottom: 2em;
		h2 {
			margin: auto;
			text-decoration: underline;
			text-underline-offset: 5px;
		}
		button {
			outline: transparent;
			background-color: transparent;
			border: none;
			margin-left: 1.8em;
			border-radius: 100%;
			align-self: center;
		}
	}
	section {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		padding: 1.8em;
		box-shadow: 0px 0px 10px 1px rgba(17, 17, 26, 0.18);
		border-radius: 0.5em;
	}
	.left-content {
		margin-top: 2em;
		width: 50%;
		.image-container {
			width: 400px;
			img {
				border-radius: 0.5em;
				box-shadow: 0px 0px 10px 1px rgba(17, 17, 26, 0.18);
			}
		}
		p {
			font-weight: bold;
			margin-block: 2em 1em;
		}
		ul,
		li {
			padding-inline: 2em;
			list-style-type: square;
		}
		li {
			padding-inline: 1em;
		}
	}
	.right-content {
		padding-inline: 1em;
		width: 50%;
		p {
			font-weight: bold;
			margin-block: 1em 1em;
			margin-inline: 0em 0em;
		}
		ul,
		li {
			padding-inline: 2em;
			list-style-type: square;
		}
		li {
			padding: 0.3rem;
		}
	}
	.similar {
		margin: 2.5em;
		padding: 2em;
		height: 24em;
		box-shadow: 0px 0px 10px 1px rgba(17, 17, 26, 0.18);
		border-radius: 0.5em;
		p {
			padding: 0.5em;
		}
	}
	@media (max-width: 1280px) {
		.left-content,
		.right-content {
			width: 100%;
		}
		button {
			margin-right: 1.2em;
		}
	}
`;
