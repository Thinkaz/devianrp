"use client";

import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

type Props = {
    children: string | React.ReactNode | React.JSX.Element[];
}

const Provider = ({ children }: Props) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    return (
        <ThemeProvider attribute="class">
            {mounted && children}
        </ThemeProvider>
    );
};

export default Provider;