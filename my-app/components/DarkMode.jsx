'use client'

export default function DarkMode({ darkMode, setDarkMode }) {


    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev)
    }

    return (
        <button className='fixed w-16 h-16 bottom-16 right-16 bg-neutral-800 dark:bg-slate-100 rounded-full text-white dark:text-neutral-800'
            onClick={toggleDarkMode}
        >
            {darkMode ? "LHT" : "DRK"}
        </button>
    )
}
