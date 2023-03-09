import styled from 'styled-components';

const StyledCardContainer = styled.div`
	display: grid;
	gap: 2rem;
	padding: 1.625rem;
	padding-top: 4.4375rem;

	@media screen and (min-width: 1322px) {
		grid-template-rows: 282px 266px;
		grid-template-columns: repeat(4, 1fr);
		margin: 3rem;
	}
`;

export { StyledCardContainer };
