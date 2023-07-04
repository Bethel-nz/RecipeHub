import React from 'react';
import { GrFacebook, GrTwitter } from 'react-icons/gr';
import styled from 'styled-components';
const FollowMe = () => {
	return (
		<FWrapper>
			<div className='social'>
				<span>
					<b>Follow me:</b>
				</span>
				<a href='#'>
					<GrFacebook />
				</a>
				<a href='#'>
					<GrTwitter />
				</a>
			</div>
			<ul>
				<li>
					Made with love by <a href='#'>Bethel.nz</a>
				</li>
			</ul>
		</FWrapper>
	);
};

export default FollowMe;

export const FWrapper = styled.div`
	display: flex;
	align-items: center;
	margin: auto;
	max-width: 1280px;
	gap: 20px;
	position: relative;
	top: 2em;
	.social,
	a {
		display: flex;
		gap: 0.8em;
		align-items: center;
	}
	ul {
		padding-inline-end: 3em;
		margin-left: auto;
	}
	li {
		align-items: center;
		gap: 10px;
		display: inline-flex;
		margin-inline: 1em;
	}
	a {
		color: #333333c3;
	}

	@media (max-width: 1280px) {
		flex-direction: column;
		.social,
		a {
			margin: auto;
		}
		ul {
			margin-left: 0;
		}
	}
`;
