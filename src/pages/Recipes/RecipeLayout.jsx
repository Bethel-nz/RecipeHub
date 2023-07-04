import { Outlet, useLocation } from 'react-router-dom';
import Recipes from './Recipes';

export default function RecipeLayout() {
	const location = useLocation();
	return (
		<div className='careers-layout'>
			{location.pathname === '/recipes' && <Recipes />}
			<Outlet />
		</div>
	);
}
