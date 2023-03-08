import { StyledCard, StyledUserContainer } from "./styles"


const Card = ({backgroundColor, positionColumn}) => {
    return <StyledCard backgroundColor={backgroundColor} positionColumn={positionColumn}>
        <StyledUserContainer></StyledUserContainer>
        
    </StyledCard>
}

export default Card