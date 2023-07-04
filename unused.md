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
