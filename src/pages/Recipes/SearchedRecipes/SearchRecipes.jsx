import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SearchRecipes = () => {
	const [searchedRecipe, setSearchedRecipe] = useState('');
	const Navigate = useNavigate();
	const location = useLocation();

	const handleSearch = (e) => {
		e.preventDefault();
		Navigate(`/search/${searchedRecipe}`);
	};
	return (
		<div>
			<Wrapper>
				<div className='header'>
					<div className='back'>
						{location.pathname !== '/recipes' && (
							<button onClick={() => Navigate('/recipes')}>
								<IoIosArrowDropleftCircle color='#7ed147' size={36} />
							</button>
						)}
					</div>
					<form onSubmit={handleSearch}>
						<div className='form'>
							<div className='icon'>
								<BiSearch size={28} color='#579131' />
							</div>
							<input
								type='text'
								placeholder='search for a recipe'
								onChange={(e) => setSearchedRecipe(e.target.value)}
							/>
						</div>
					</form>
				</div>
			</Wrapper>
			<div className='container'>
				<Outlet />
			</div>
		</div>
	);
};

export default SearchRecipes;

const Wrapper = styled.div`
	margin: 1rem auto;
	gap: 0.4em;
	width: fit-content;
	.header {
		display: flex;
	}
	.back,
	button {
		margin-right: 0.8em;
		margin-top: 0.4em;
		background-color: transparent;
		outline: none;
		border: none;
	}
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.form {
		border: 2px solid #41323250;
		width: 20em;
		position: relative;
		border-radius: 0.5em;
	}
	.form input {
		width: 100%;
		padding: 0.8em;
		padding-left: 2.5em;
		outline: transparent;
		border: none;
		border-radius: 0.5em;
		font-size: 1.2em;
	}

	.form .icon {
		position: absolute;
		padding-inline: 0.5em;
		top: 58%;
		transform: translateY(-50%);
	}

	@media (max-width: 768px) {
		flex-wrap: wrap;
		justify-content: center;
		.container {
			margin-top: 1rem;
		}
	}
	@media (max-width: 420px) {
		width: 16em;
	}
`;
