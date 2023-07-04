import { motion } from 'framer-motion';
import styled from 'styled-components';

export const HomeWrapper = styled(motion.div)`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: #bef09d;
	padding: 2em;
	height: 70vh;
	border-radius: 0.5em;
	width: 100%;
	margin: auto;

	.intro {
		width: 50%;
	}
	.hero {
		width: 50%;
		height: 90%;
	}

	@media (max-width: 1280px) {
		padding: 0;
		.intro {
			width: 100%;
		}
		.hero {
			width: 100%;
			display: none;
		}
	}
`;
