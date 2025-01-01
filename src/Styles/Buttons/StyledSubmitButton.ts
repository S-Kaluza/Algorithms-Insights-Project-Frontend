import styled from "@emotion/styled";
import {Button} from "@mui/material";

const StyledSubmitButton = styled(Button)`
    height: 2rem;
    padding-right: 2vw;
    border-radius: 10px;
    color: ${props => props.theme.palette.text.primary};
    border: 1px solid ${props => props.theme.palette.text.primary};
`

export default StyledSubmitButton