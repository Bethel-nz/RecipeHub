import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
	padding: 2rem;
`;

const Title = styled.h1`
	font-size: 2rem;
	margin-bottom: 1rem;
	text-align: center;
`;

const Subtitle = styled.h2`
	font-size: 1.5rem;
	margin-bottom: 1rem;
`;

const Text = styled.p`
	margin-bottom: 1rem;
`;

const List = styled.ul`
	margin-bottom: 1rem;
`;

const ListItem = styled.li`
	margin-bottom: 0.5rem;
	padding-inline-start: 0.5em;
	margin-inline-start: 3.5em;
	list-style: square;
	list-style-position: right;
`;

const About = () => {
	return (
		<AboutContainer>
			<Title>About RecipeHub</Title>
			<Subtitle>A Practice Project in Web Development</Subtitle>
			<Text>
				Recipe App is a web application developed as a practice project to
				enhance skills in web development. It showcases the utilization of
				React.js, CSS Grid, Framer Motion, Splide.js, Spoonacular API,and a
				custom useAxios hook for data fetching.
			</Text>
			<Subtitle>Technologies Used</Subtitle>
			<List>
				<ListItem>React.js</ListItem>
				<ListItem>Styled Components</ListItem>
				<ListItem>CSS Grid</ListItem>
				<ListItem>Framer Motion</ListItem>
				<ListItem>Splide.js</ListItem>
				<ListItem>Spoonacular API</ListItem>
			</List>
			<Subtitle>Unique Features</Subtitle>
			<Text>
				- Tabbed recipe switcher for easy navigation between different recipes.
			</Text>
			<Text>
				- Responsive grid system to ensure optimal display across various screen
				sizes.
			</Text>
			<Text>
				- Details page with similar recipes section to provide related recipe
				suggestions.
			</Text>
			<Subtitle>Learning Journey</Subtitle>
			<Text>
				Developing this recipe app allowed me to gain hands-on experience and
				overcome various challenges in web development. I learned how to
				integrate APIs, implement responsive layouts, and leverage powerful
				libraries and frameworks.
			</Text>
			<Subtitle>Future Development</Subtitle>
			<Text>
				In the future, I plan to further enhance the app by adding additional
				features such as user authentication, favorite recipes, and personalized
				recommendations.
			</Text>
		</AboutContainer>
	);
};

export default About;
