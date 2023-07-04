import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import food from '../../../../assets/food.webp';

const Hero = () => {
	return (
		<HeroStyle>
			<div className='background'>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<img src={food} alt={'hero image'} />
				</motion.div>
			</div>
		</HeroStyle>
	);
};

export default Hero;

const HeroStyle = styled(motion.div)`
	height: 100%;
	.background {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		top: -11.5%;
		background-color: #f2f1eed6;
		width: 85%;
		height: 100%;
		border-bottom-left-radius: 0.5em;
		border-bottom-right-radius: 0.5em;
	}
`;
