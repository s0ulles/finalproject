'use client'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import DarkMode from "./DarkMode";

export default function Main({ children, session }) {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className={`${darkMode && "dark"} min-h-screen flex flex-col`}>
            <Header session={session?.user} />

            <main className="flex-1 dark:bg-slate-800 py-[50px]">
                {children}
            </main>

            <Footer />


            <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
    )
}
