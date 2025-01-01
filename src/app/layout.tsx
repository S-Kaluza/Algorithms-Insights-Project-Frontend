'use client';

import "./globals.css";
import {ThemeProvider} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import DarkTheme from "@/Styles/DarkTheme";
import LightTheme from "@/Styles/LightTheme";
import {useEffect, useState} from "react";
import {GoogleOAuthProvider} from "@react-oauth/google";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [theme, setTheme] = useState(LightTheme);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setTheme(localStorage.getItem('theme') === 'dark' ? DarkTheme : LightTheme);
        }
    }, [])
  return (
      <html lang="en">
        <body>
          <ThemeProvider theme={theme}>
              <GoogleOAuthProvider clientId={"741838537797-hrcjpfr0isq414imes5t4vd60a5p2sdj.apps.googleusercontent.com"}>
            <CssBaseline /> {/* Adds baseline styles */}
            {children}
              </GoogleOAuthProvider>
          </ThemeProvider>
        </body>
      </html>
  );
}
