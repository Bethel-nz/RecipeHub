import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../../../constant/Button';

const GetStarted = () => {
	const text =
		'Say goodbye to boring meals and hello to a brand new culinary excellence, all on your device.';
	const textArray = text.split(' ');
	const variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				type: 'spring',
				delayChildren: 1,
				staggerChildren: 0.1,
				duration: 0.1,
			},
		},
	};
	const item = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};
	return (
		<GSWrapper>
			<div
				style={{
					display: 'flex',
				}}
			>
				<motion.div
					layout='position'
					initial='hidden'
					animate='visible'
					variants={variants}
					className='text-container'
				>
					{textArray.map((word, index) => (
						<motion.span key={index} variants={item}>
							<h1>{word}</h1>
						</motion.span>
					))}
				</motion.div>
			</div>
			<div>
				<StyledP initial={{ opacity: 0.1 }} animate={{ opacity: 1 }}>
					Want to learn cook but confused how to start? No need to worry
				</StyledP>
			</div>
			<div className='btn-container'>
				<Link to={'recipes'}>
					<Button
						isCta={true}
						variants={item}
						initial={'hidden'}
						animate={'visible'}
						whileTap={{ scale: [1, 1.2, 0.8, 1.2, 1] }}
						whileHover={{ scale: 1.1, translate: [0, -0.15] }}
					>
						Explore Menu
					</Button>
				</Link>
			</div>
		</GSWrapper>
	);
};

export default GetStarted;

const GSWrapper = styled.div`
	padding: 2em;
	width: 80%;
	height: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	text-align: left;
	color: #363636;
	word-spacing: 1.5;
	h1 {
		font-size: 2.5rem;
		font-weight: 800;
		line-height: 1.4;
		font-family: 'DM Serif Display', serif;
	}
	span {
		display: inline-block;
		margin-inline: 0.19em;
	}
	.text-container {
		display: flex;
		flex-wrap: wrap;
		gap: 0.2em;
		text-align: center;
	}
	a,
	a:visited {
		color: inherit;
		font-weight: bold;
	}
	.btn-container {
		display: flex;
		justify-content: space-between;
	}
	@media (max-width: 1280px) {
		text-align: center;
		width: 100%;
		padding: 1em;
		h1 {
			width: 100%;
		}
		.btn-container {
			margin: auto;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 1.2em;
			margin-top: 1.5em;
		}
		.text-container {
			justify-content: center;
		}
	}
	@media (max-width: 420px) {
		padding: 0.5em;
		h1 {
			font-size: 2rem;
		}
	}
`;

const StyledP = styled(motion.p)`
	padding-block: 1em;
	font-size: 1em;
	font-family: 'Poppins', sans-serif;
	color: #4d4d4d;
	font-weight: medium;
	margin: 0.8em auto;
`;
