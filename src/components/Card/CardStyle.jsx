import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const CardStyle = styled(motion.div)`
	position: relative;
	height: ${({ isSimilar }) => (isSimilar ? '250px' : ' 300px')};
	width: ${({ isSimilar }) => (isSimilar ? '200px' : ' 250px')};
	border-radius: 0.5em;
	box-shadow: 0px 0px 10px 1px rgba(17, 17, 26, 0.18);
	margin: 0.3em 0em;
	text-align: center;
	display: flex;
	place-items: center;
	&:before {
		content: '';
	}
	p {
		position: absolute;
		bottom: 0%;
		color: white;
		background-color: rgba(0, 0, 0, 0.4);
		padding: 0.5em;
		border-radius: 0.2em;
		width: 100%;
	}
	&:before {
		content: '';
		height: 10%;
		color: white;
	}

	img {
		position: relative;
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 0.5em;

		&:hover {
			transform: scale(1.1);
			transition: transform 0.5s ease-in-out;
		}
	}
`;

export default CardStyle;

const shimmerAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

export const SkeletonCard = styled.div`
	width: 250px;
	height: 300px;
	background-color: #f0f0f0;
	position: relative;
	overflow: hidden;
	border-radius: 0.5em;

	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 200%;
		height: 100%;
		background: linear-gradient(
			to right,
			transparent 0%,
			#e6e6e6 50%,
			transparent 100%
		);
		animation: ${shimmerAnimation} 5s infinite;
	}
`;

const shimmer = keyframes`
  0% {
    background-position: -500px 0;
  }
  100% {
    background-position: 500px 0;
  }
`;
export const LoadingSkeleton = styled.div`
	width: 100%;
	height: 100vh;
	background: linear-gradient(to right, #f6f7f8 4%, #e3e6e8 25%, #f6f7f8 36%);
	background-size: 1000px 100%;
	position: relative;
	overflow: hidden;

	::before {
		content: '';
		display: block;
		width: 100%;
		height: 100%;
		background: linear-gradient(to right, #f6f7f8 4%, #e3e6e8 25%, #f6f7f8 36%);
		background-size: 1000px 100%;
		position: absolute;
		top: 0;
		left: 0;
		animation: ${shimmer} 1s linear infinite;
	}
`;
