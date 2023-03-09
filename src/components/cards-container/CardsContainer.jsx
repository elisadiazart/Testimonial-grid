import Card from "../card/Card"
import { cardsInfo } from "../../constants/cards-info"
import { StyledCardContainer } from "./styles."


const CardContainer = () => {
    return <StyledCardContainer>
        {
			cardsInfo.map(card=>
			<Card key={card.id}{...card}/>
			)
		}
    </StyledCardContainer>
}

export default CardContainer