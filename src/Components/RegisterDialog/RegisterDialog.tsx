"use client"

import {DialogTitle, List, ListItemText, Snackbar} from "@mui/material";
import StyledDialog from "@/Styles/Dialogs/StyledDialog";
import {RegisterHeader} from "@/Components/RegisterHeader/RegisterHeader";
import StyledCredentialsInput from "@/Styles/Inputs/StyledCredentialsInput";
import StyledAuthFormWrapper from "@/Styles/Wrapers/StyledAuthFormWrapper";
import StyledSubmitButton from "@/Styles/Buttons/StyledSubmitButton";
import StyledButtonsWrapper from "@/Styles/Wrapers/StyledButtonsWrapper";
import StyledCredentialInputsWrapper from "@/Styles/Wrapers/StyledCredentialInputsWrapper";
import {useGoogleLogin} from "@react-oauth/google";
import StyledButtonIcon from "@/Styles/Images/StyledButtonIcon";
import {useFormik} from "formik";
import StyledAuthForm from "@/Styles/Forms/StyledAuthForm";
import RegisterValidationSchema from "@/ValidationSchemas/RegisterValidationSchema";
import {useState} from "react";
import React from "react";


interface RegisterDialogProps {
    open: boolean,
    onClose?: () => void,
}
interface RegisterFormInterface {
    email: string;
    password: string;
    repeatPassword: string;
}

const RegisterDialog = ({open, onClose} : RegisterDialogProps) => {
    const [isSnackbarOpen, setIsSnackbarOpen] = useState<boolean>(false);
    const [errors, setErrors] = useState<(string | undefined)[]>([]);
    const formik = useFormik<RegisterFormInterface>({
        initialValues: {
            email: '',
            password: '',
            repeatPassword: '',
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema: RegisterValidationSchema
    })

    const handleCloseSnackbar = () => {
        setIsSnackbarOpen(false);
    }

    const googleLogin = useGoogleLogin({
        onSuccess: tokenResponse => {
            console.log(tokenResponse);
        },
        onError: errorResponse => {
            console.log(errorResponse);
        }
    })

    const onClickSubmitButton = () => {
        setErrors([])
        if(formik.errors.email) {
            setErrors(prevState => [...prevState, formik.errors.email]);
            setIsSnackbarOpen(true);
        }
        if (formik.errors.password) {
            setErrors(prevState => [...prevState, formik.errors.password]);
            setIsSnackbarOpen(true);
        }
        if (formik.errors.repeatPassword) {
            setErrors(prevState => [...prevState, formik.errors.repeatPassword]);
            setIsSnackbarOpen(true);
        }
    }
    return (
        <>
            <Snackbar
                open={isSnackbarOpen}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                message={
                    <List>
                        {errors?.map((error, i) => {
                            return <ListItemText key={i}>{i + 1}:{error}</ListItemText>
                        })}
                    </List>
                }
            />
            <StyledDialog open={open} onClose={onClose}>
                <DialogTitle><RegisterHeader /></DialogTitle>
                <StyledAuthForm onSubmit={formik.handleSubmit}>
                    <StyledAuthFormWrapper>
                        <StyledCredentialInputsWrapper>
                            <StyledCredentialsInput placeholder="Email" onChange={formik.handleChange} name="email" id="email" />
                            <StyledCredentialsInput type="password" placeholder="Password" onChange={formik.handleChange} name="password" id="password" />
                            <StyledCredentialsInput type="password" placeholder="Repeat password" onChange={formik.handleChange} name="repeatPassword" id="repeatPassword" />
                        </StyledCredentialInputsWrapper>
                        <StyledButtonsWrapper>
                            <StyledSubmitButton onClick={() => googleLogin()}><StyledButtonIcon src={"/googleLogo.svg"} />Login With Google</StyledSubmitButton>
                            <StyledSubmitButton><StyledButtonIcon src={"/logo.svg"} alt={"X"}/>Forgot Password</StyledSubmitButton>
                        </StyledButtonsWrapper>
                    </StyledAuthFormWrapper>
                    <StyledButtonsWrapper>
                        <StyledSubmitButton type="submit" onClick={onClickSubmitButton}><StyledButtonIcon src={"/login_icon.svg"} />Register</StyledSubmitButton>
                    </StyledButtonsWrapper>
                </StyledAuthForm>
            </StyledDialog>
        </>
    )
}

export default RegisterDialog;