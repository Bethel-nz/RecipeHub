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
			<div className='me'>
				<span>
					Made with love by <a href='#'>Bethel.nz</a>
				</span>
			</div>
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
		gap: 1em;
		align-items: center;
	}
	.me {
		margin-left: auto;
	}
	span {
		align-items: center;
		gap: 5px;
		display: inline-flex;
	}
	a {
		color: #333333c3;
		font-weight: bold;
	}

	@media (max-width: 1280px) {
		flex-direction: column;
		.social,
		.me,
		a {
			margin: auto;
		}
		span {
			margin-left: 0;
		}
	}
`;
