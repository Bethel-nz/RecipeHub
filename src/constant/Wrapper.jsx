import styled from 'styled-components';

export const Wrapper = styled.div(
	({ maxWidth }) => `
	max-width: ${maxWidth || 1400}px;
	margin: auto;
	padding: 1rem;
	height:80vh;
	position:relative;

	@media (max-width: 1280px) {
		max-width: ${maxWidth || 1050}px;
	}
	@media (max-width: 1100px) {
		max-width: ${maxWidth || 950}px;
	}
	@media (max-width: 900px) {
		max-width: ${maxWidth || 850}px;
	}
	@media (max-width: 720px) {
		max-width: ${maxWidth || 620}px;
	}
	@media (max-width: 480px) {
		max-width: ${maxWidth || 440}px;
	}
`
);
