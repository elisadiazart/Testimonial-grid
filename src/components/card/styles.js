import styled from 'styled-components';

const StyledCard = styled.div`
	background-color: ${({ backgroundColor }) => backgroundColor};
	padding: 2rem;
	border-radius: 8px;
	position: relative;
	z-index: 0;

	&::after {
		content: '';
		position: absolute;
		background-image: ${({ backgroundImage }) => backgroundImage};
		width: 100px;
		height: 100px;
		top: 0;
		right: 1.5rem;
		z-index: -1;
	}

	@media screen and (min-width: 1322px) {
		grid-column: ${({ positionColumn }) => positionColumn};
		grid-row: ${({ positionRow }) => positionRow};
		padding: 1.5rem 2rem 1.5rem 2rem;

		&::after {
			right: 5rem;
		}
	}
`;

const StyledUserContainer = styled.div`
	display: flex;
	align-items: center;
`;

const StyledUserTextContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledText = styled.p`
	font-size: 13px;
	font-family: 'Barlow Semi Condensed', sans-serif;
	color: ${({ textColor }) => textColor};
	font-weight: 500;
	margin: 0;
	margin-bottom: 0.2rem;
	line-height: 18px;
`;

const StyledSmallText = styled.p`
	font-family: 'Barlow Semi Condensed', sans-serif;
	font-size: 11px;
	font-weight: 500;
	color: ${({ smallTextColor }) => smallTextColor};
	margin: 0;
`;

const StyledQuote = styled.p`
	font-size: 20px;
	font-weight: 600;
	color: ${({ textColor }) => textColor};
	font-family: 'Barlow Semi Condensed', sans-serif;
	line-height: 24px;
	margin-bottom: ${({ marginBottomQuote }) => marginBottomQuote};

	@media screen and (min-width: 1322px) {
		margin-bottom: 1rem;
	}
`;

const StyledUserIcon = styled.img`
	border-radius: 50%;
	width: 35px;
	height: 35px;
	margin-right: 1rem;
`;

export {
	StyledCard,
	StyledUserContainer,
	StyledText,
	StyledSmallText,
	StyledQuote,
	StyledUserIcon,
	StyledUserTextContainer
};
