import styled from "@emotion/styled";

export const StyledRegisterHeader = styled.div`
    display: flex;
    width: 100%;
    border-bottom: 1px solid;
    border-image: linear-gradient(to right, 
        ${props => props.theme.palette.primary.dark} 0%,
        ${props => props.theme.palette.primary.dark} 25%,
        ${props => props.theme.palette.secondary.dark} 52%,
        ${props => props.theme.palette.primary.main} 100%) 1;
`