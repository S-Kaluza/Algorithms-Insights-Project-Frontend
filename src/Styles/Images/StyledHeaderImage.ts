import styled from "@emotion/styled";
import Image from "next/image";

const StyledHeaderImage = styled(Image)`
    filter: invert(${props => props.theme.palette.mode === "light" ? 0 : 1});
`
export default StyledHeaderImage