import {StyledRegisterHeader} from "@/Styles/Headers/StyledRegisterHeader";
import { Box } from "@mui/material";
import {StyledParagraph} from "@/Styles/Paragraph/StyledParagraph";
import StyledHeaderImage from "@/Styles/Images/StyledHeaderImage";

export const RegisterHeader = () => {
    return (
        <StyledRegisterHeader>
            <Box display="flex" alignItems="center" justifyContent="center">
                {/* Using next/image for optimization */}
                <StyledHeaderImage
                    src="/logo.svg"
                    alt="Next.js logo"
                    width={50}
                    height={50}
                    priority
                />
            </Box>
            <StyledParagraph>Algorithm Insights</StyledParagraph>
        </StyledRegisterHeader>
    )
}