import styled from "@emotion/styled"
import {Dialog} from "@mui/material";

const StyledDialog = styled(Dialog)`
    & > .MuiDialog-container > .MuiPaper-root {
        background: ${props => props.theme.palette.primary.main};
        width: 60vw;
        height: 40vh;
    }
`;
export default StyledDialog;