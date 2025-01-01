import styled from "@emotion/styled";

const StyledCredentialsInput = styled.input`
    background: none;
    color: ${(props) => props.theme.palette.text.primary};
    height: 1rem;
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid black;
    border-radius: 5px;
    padding: 0 5px;
    box-sizing: border-box;
    line-height: 40px;

    ::placeholder {
        color: gray;
        font-style: italic;
        font-size: 16px;
        text-align: left;
    }

    &:focus {
        border-color: #007BFF;
        outline: none;
    }
`;

export default StyledCredentialsInput;
