"use client";

import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const ThemeSwitcher = () => {
    const { systemTheme, theme, setTheme } = useTheme();

    const renderThemeChanger = () => {
        const currentTheme = theme === "system" ? systemTheme : theme;
        if(currentTheme === "dark") {
            return (
                <FontAwesomeIcon icon={faSun} height={20} width={20} className="text-white hover:text-yellow-300 duration-300" onClick={() => setTheme('light')} role="button"/>
            )
        } else {
            return ( 
                <FontAwesomeIcon icon={faMoon} height={20} width={20} className="text-black hover:text-indigo-300 duration-300" onClick={() => setTheme('dark')} role="button"/>
            )
        }
    }

    return (
        <div className="flex flex-row gap-2 items-center">
            {renderThemeChanger()}
        </div>
    );
}

export default ThemeSwitcher;