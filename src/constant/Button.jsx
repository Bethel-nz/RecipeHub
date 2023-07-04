import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Button = styled(motion.button)`
	position: relative;
	color: ${({isGreen}) => (isGreen ? '#eee' : '#363636')};
	padding: ${({isCta})=> (isCta ? `1em 3em` : `0.5em 2em`)};
	bottom: 0;
	border-radius: 0.5em;
	outline: transparent;
	border: none;
	background-color: ${({isGreen}) => (isGreen ? '#7ed147' : '#f2f1ee')};
	font-family: 'Poppins', sans-serif;
	font-weight: bold;
	font-size: 1rem;
	display: flex;
	align-self: center;
	box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
	cursor: pointer;
	transform: translate(1) translate(0, 0);
	transition: transform 225ms, box-shadow 225ms;
`;
