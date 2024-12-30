'use client';

import "./globals.css";
import {ThemeProvider} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import DarkTheme from "@/Styles/DarkTheme";
import LightTheme from "@/Styles/LightTheme";
import {useEffect, useState} from "react";

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
            <CssBaseline /> {/* Adds baseline styles */}
            {children}
          </ThemeProvider>
        </body>
      </html>
  );
}
