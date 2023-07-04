import React from 'react';
import { HomeWrapper } from './HomeStyle';
import GetStarted from './Layout/components/GetStarted';
import Hero from './Layout/components/Hero';
const Home = () => {
	return (
		<>
			<HomeWrapper>
				<div className='intro'>
					<GetStarted />
				</div>
				<div className='hero'>
					<Hero />
				</div>
				
				
			</HomeWrapper>
		</>
	);
};

export default Home;
