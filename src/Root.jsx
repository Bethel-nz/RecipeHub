import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import FollowMe from './components/FollowMe';
import NavBar from './components/NavBar/NavBar';
import { Wrapper } from './constant/Wrapper';
import Home from '/src/pages/Home/Home';

const Root = () => {
	const location = useLocation();
	return (
		<>
			<NavBar />
			<Wrapper>
				<main>{location.pathname === '/' && <Home />}</main>
				<Outlet />
				<FollowMe />
			</Wrapper>
		</>
	);
};

export default Root;
