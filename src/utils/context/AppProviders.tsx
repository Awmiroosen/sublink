"use client";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

const AppProviders = ({ children }: PropsType) => {
  return (
    <>
      <ThemeProvider attribute={"class"} enableSystem>
        {children}
      </ThemeProvider>
    </>
  );
};

export default AppProviders;
