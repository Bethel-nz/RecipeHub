import styled, { keyframes } from 'styled-components';

const slideDown = keyframes`
from {
	transform: translateY(-100%);
} to{
	transform: translateY(0);
}`;

export const Nav = styled.nav`
	font-size: 1.1em;
	display: flex;
	align-items: center;
	margin: 1.2em auto auto;
	max-width: 1280px;
	gap: 20px;
	padding: 1rem 2rem;
	box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2), -2px -3px 6px rgba(0, 0, 0, 0.2);
	border-radius: 0.5em;
	height: 4.5em;
	position: relative;
	z-index: 10000;
	border: 0.2em solid #bef09d;

	ul {
		display: inline-flex;
		align-items: center;
		gap: 20px;
		margin-left: auto;
	}

	li {
		margin-inline: 1em;
	}
	.menu {
		display: none;
		cursor: pointer;
	}
	.logo {
		color: #248f2e;
		font-weight: bold;
		display: flex;
		gap: 0.2em;
		align-self: center;
		z-index: 1;
	}
	a {
		color: #333333c3;
	}
	a.active {
		color: #248f2e;
		font-weight: bold;
	}

	@media (max-width: 1280px) {
		max-width: 950px;
	}
	@media (max-width: 1100px) {
		max-width: 850px;
	}
	@media (max-width: 900px) {
		max-width: 720px;
	}
	@media (max-width: 720px) {
		max-width: 680px;
		ul {
			display: none;
		}
		.list {
			display: block;
		}
		.list {
			padding-inline-end: 1em;
			position: absolute;
			align-items: center;
			top: 0%;
			width: 100%;
			text-align: center;
			right: 0;
			z-index: -1;
			font-size: 1.3rem;
			padding-top: 3em;
			padding-bottom: 0.5em;
			margin: auto;
			animation: ${slideDown} 0.3s ease-out forwards;
			transform: translateY(-100%);
			background-color: white;
			border: 0.2em solid #bef09d;
			border-radius: 0.5em;
			box-shadow: 0px 0px 10px 1px rgba(17, 17, 26, 0.18);
			li {
				margin: 1.5em;
				padding-bottom: 0.5em;
				border-bottom: 3px solid #eee;
			}
		}

		.menu {
			margin-left: auto;
			display: block;
			cursor: pointer;
		}
	}
	@media (max-width: 580px) {
		max-width: 480px;
	}
	@media (max-width: 480px) {
		max-width: 380px;
	}
`;
