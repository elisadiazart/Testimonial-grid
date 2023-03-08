import styled from 'styled-components';

const StyledCard = styled.div`
	background-color: ${({ backgroundColor }) => backgroundColor};
	grid-column: ${({ positionColumn }) => positionColumn};
`;

const StyledUserContainer = styled.div`
	display: flex;
`;

export { StyledCard, StyledUserContainer };
