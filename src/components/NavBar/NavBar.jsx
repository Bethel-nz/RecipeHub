import React, { useEffect, useRef, useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom';
import { Nav } from './NavBarStyles';
const NavBar = () => {
	const [toggle, setToggle] = useState(false);
	const navRef = useRef(null);
	const handleToggle = () => {
		setToggle((prev) => !prev);
	};
	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (navRef.current && !navRef.current.contains(event.target)) {
				setToggle(false);
			}
		};

		document.addEventListener('click', handleOutsideClick);

		return () => {
			document.removeEventListener('click', handleOutsideClick);
		};
	});
	return (
		<Nav>
			<Link>
				<div className='logo'>
					<span> RecipeHub</span>
				</div>
			</Link>
			<ul className={toggle ? 'list' : ''}>
				<li>
					<NavLink to={'/'}>Home</NavLink>
				</li>
				<li>
					<NavLink to={'recipes'}>Recipes</NavLink>
				</li>
				<li>
					<NavLink to={'about'}>About</NavLink>
				</li>
			</ul>
			<div className='menu' onClick={handleToggle}>
				<HiMenu size={24} />
			</div>
		</Nav>
	);
};

export default NavBar;
