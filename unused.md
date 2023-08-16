```jsx
useEffect(() => {
	let timeout;
	const handleStorage = () => {
		if (!value || value.length === 0) {
			return storeValue(data);
		} else if (value && value !== null) {
			return value;
		} else {
			return null;
		}
	};
	timeout = setTimeout(handleStorage, 1000);
	return () => clearTimeout(timeout);
}, []);
```

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import RecipeDetails from './pages/Recipes/RecipeDetails/RecipeDetails';
import RecipeLayout from './pages/Recipes/RecipeLayout';
import Recipes from './pages/Recipes/Recipes';
import { GlobalStyle } from './styles/GlobalStyles';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: 'recipes',
				element: <RecipeLayout />,
				children: [
					{ index: true, path: 'recipes', element: <Recipes /> },
					{
						path: ':recipeId',
						element: <RecipeDetails />,
					},
				],
			},

			{
				path: 'about',
				element: <About />,
			},

			{
				path: 'contact',
				element: <Contact />,
			},
		],
	},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<>
			<GlobalStyle />
			<RouterProvider router={router} />
		</>
	</React.StrictMode>
);
```

import React, { useState } from 'react';

import { BiSearch } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SearchRecipes = () => {
const [searchedRecipe, setSearchedRecipe] = useState('');
const Navigate = useNavigate();

    const handleSearch = (e) => {
    	e.preventDefault();
    	Navigate();
    };
    return (
    	<div>
    		<Wrapper>
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
    		</Wrapper>
    	</div>
    );

};

export default SearchRecipes;

const Wrapper = styled.div`
display: flex;
margin: 1rem auto;
gap: 0.4em;
border: 2px solid #41323250;
border-radius: 0.5em;
width: fit-content;

    .container {
    	display: flex;
    	justify-content: center;
    	align-items: center;
    }

    .form {
    	width: 20em;
    	position: relative;
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
