import { motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';
import RecipeContent from './Components/RecipeContent';
import SearchRecipes from './SearchedRecipes/SearchRecipes';

String.prototype.capitalizeFirstLetter = function () {
	return this.charAt(0).toUpperCase() + this.slice(1);
};

let tags = [
	{
		id: 1,
		label: 'breakfast',
	},
	{
		id: 2,
		label: 'dinner',
	},
	{
		id: 3,
		label: 'dessert',
	},
	{
		id: 4,
		label: 'veggie',
	},
];
export default function App() {
	const [activeTab, setActiveTab] = useState(tags[0].id);
	const [content, setContent] = useState(tags[0].label);
	const setTab = (id, label) => {
		setActiveTab(id);
		setContent(label);
	};

	return (
		<div className='App'>
			<Wrapper>
				{tags.map((tag) => (
					<Button
						key={tag.id}
						activeTab={activeTab}
						tag={tag.id}
						onClick={() => setTab(tag.id, tag.label)}
					>
						{activeTab === tag.id && (
							<ActivePill
								layoutId='active-pill'
								variants={activePillAnimation}
							/>
						)}
						<TagLabel activeTab={activeTab} tag={tag.id}>
							{tag.label.capitalizeFirstLetter()}
						</TagLabel>
					</Button>
				))}
			</Wrapper>
			<SearchRecipes />
			<div className='container'>
				<RecipeContent tags={content} />
			</div>
		</div>
	);
}

const Wrapper = styled.div`
	display: flex;
	margin: 1rem auto;
	gap: 0.4em;
	border: 2px solid #41323250;
	border-radius: 0.5em;
	width: fit-content;

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.form {
		width: 20em;
		position: relative;
	}
	.form input {
		width: 100%;
		padding: 0.8em;
		padding-left: 2.5em;
		outline: transparent;
		border: none;
		border-radius: 0.5em;
		font-size: 1.2em;
	}

	.form .icon {
		position: absolute;
		padding-inline: 0.5em;
		top: 58%;
		transform: translateY(-50%);
	}

	@media (max-width: 768px) {
		flex-wrap: wrap;
		justify-content: center;
		.container {
			margin-top: 1rem;
		}
	}
	@media (max-width: 420px) {
		width: 16em;
	}
`;

const Button = styled.button`
	position: relative;
	border-radius: 9999px;
	padding: 0.8em 1.6em; /* Adjusted padding values */
	outline: transparent;
	border: none;
	background-color: transparent;

	&:hover {
		opacity: ${({ activeTab, tag }) => (activeTab === tag ? '1' : '0.5')};
	}

	&:focus-visible {
		outline: 2px solid skyblue;
	}

	font-size: 0.875rem;
	font-weight: 500;

	@media (max-width: 768px) {
		margin: 0.5rem;
		padding: 0.5em 1em;
	}
`;

const TagLabel = styled.span`
	position: relative;
	z-index: 10;
	font-weight: ${({ activeTab, tag }) =>
		activeTab === tag ? 'bold' : 'normal'};
	color: ${({ activeTab, tag }) => (activeTab === tag ? '#eee' : '#363636')};
`;

const activePillAnimation = {
	initial: { scale: 0 },
	animate: { scale: [1, 0.8, 1, 0.8, 1] },
	transition: { type: 'spring', stiffness: 500, damping: 300 },
};

const ActivePill = styled(motion.div).attrs(() => ({
	variants: activePillAnimation,
}))`
	position: absolute;
	inset: 0;
	border-radius: 0.5em;
	background-color: #7ed147;
`;
