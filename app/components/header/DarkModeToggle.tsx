import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export function DarkModeToggle() {
    const [darkMode, setDarkMode] = React.useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark'
        }
        return false // Default state when not in a browser environment
    })

    React.useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [darkMode])

    const toggleDarkMode = (event) => {
        event.preventDefault()
        event.stopPropagation()

        setDarkMode((prevMode) => {
            const newMode = !prevMode
            localStorage.setItem('theme', newMode ? 'dark' : 'light')
            document.documentElement.classList.toggle('dark', newMode)
            return newMode
        })
    }
    return (
        <div className="darkmode-btn pr-3 pt-2">
            <button
                id="theme-toggle"
                className="relative inline-flex items-center justify-center w-14 h-7 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden"
                onClick={toggleDarkMode}>
                <div
                    className={`absolute left-0.5 top-0.5 w-6 h-6 bg-white dark:bg-gray-800 rounded-full shadow transform duration-300 ease-in-out ${
                        darkMode ? 'translate-x-7' : ''
                    }`}></div>
                <FontAwesomeIcon
                    icon={faSun}
                    className={`absolute transform -translate-y-1/2 ${
                        darkMode ? 'opacity-50' : 'opacity-100'
                    } text-yellow-500 dark:text-yellow-300`}
                    style={{ top: '50%', left: '7%', fontSize: '1.25rem' }}
                />
                <FontAwesomeIcon
                    icon={faMoon}
                    className={`absolute transform -translate-y-1/2 ${
                        !darkMode ? 'opacity-50' : 'opacity-100'
                    } text-gray-500 dark:text-gray-300`}
                    style={{ top: '50%', right: '12%', fontSize: '1.25rem' }}
                />
            </button>
        </div>
    )
}
