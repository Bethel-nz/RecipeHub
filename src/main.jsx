import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import About from './pages/About/About';
import RecipeDetails from './pages/Recipes/RecipeDetails/RecipeDetails';
import RecipeLayout from './pages/Recipes/RecipeLayout';
import Recipes from './pages/Recipes/Recipes';
import SearchRecipes from './pages/Recipes/SearchedRecipes/SearchRecipes';
import SearchedContent from './pages/Recipes/SearchedRecipes/SearchedContent';
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
					{
						index: true,
						path: 'recipes',
						element: <Recipes />,
					},
					{
						path: ':recipeId',
						element: <RecipeDetails />,
					},
				],
			},
			{
				path: 'search',
				element: <SearchRecipes />,
				children: [
					{
						path: ':searched',
						element: <SearchedContent />,
					},
				],
			},
			{
				path: 'about',
				element: <About />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<GlobalStyle />
		<RouterProvider router={router} />
	</React.StrictMode>
);
