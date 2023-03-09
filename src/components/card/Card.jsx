import { StyledCard, StyledQuote, StyledSmallText, StyledText, StyledUserContainer, StyledUserIcon, StyledUserTextContainer } from "./styles"


const Card = ({backgroundColor, positionColumn, textColor, smallTextColor, iconImage, userName, quoteText, text, marginBottomQuote, positionRow, backgroundImage }) => {
    return <StyledCard backgroundColor={backgroundColor} positionColumn={positionColumn} positionRow={positionRow} backgroundImage={backgroundImage}>
        <StyledUserContainer>
            <StyledUserIcon src= {iconImage}></StyledUserIcon>
            <StyledUserTextContainer>
                <StyledText textColor={textColor}>{userName}</StyledText>
                <StyledSmallText smallTextColor={smallTextColor}>Verified Graduate</StyledSmallText>
            </StyledUserTextContainer>
        </StyledUserContainer>
        <StyledQuote marginBottomQuote ={marginBottomQuote } textColor={textColor}>{quoteText}</StyledQuote>
        <StyledText textColor={smallTextColor}>{text}</StyledText>
    </StyledCard>
}

export default Card