"use client";

import React, { useEffect } from "react";
import "../styles/appHeader.scss";
import Image from "next/image";

const AppHeader = () => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            const isDark =
                localStorage.theme === "dark" ||
                (!("theme" in localStorage) &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches);

            document.documentElement.classList.toggle("dark", isDark);
        }
    }, []);
    return (
        <div className="appHeader">
            {/* nav section */}
            <div className="navSection flex items-center justify-between px-4 py-2">
                {/* logo section */}
                <div className="logoSection">
                    <Image
                        src="/images/logoMain.png"
                        alt="Main Logo"
                        width={60}
                        height={60}
                        className="logo"
                    />
                </div>

                {/* nav list - centered */}
                <ul className="navList flex gap-6 justify-center flex-1">
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Articles</li>
                    <li>Contact</li>
                </ul>

                {/* theme toggle button - aligned right */}
                <div className="ml-auto">
                    <button
                        onClick={() => {
                            const isDark = document.documentElement.classList.toggle("dark");
                            localStorage.theme = isDark ? "dark" : "light";
                        }}
                    >
                        Toggle Theme
                    </button>
                </div>
            </div>
        </div>

    );
};

export default AppHeader;
