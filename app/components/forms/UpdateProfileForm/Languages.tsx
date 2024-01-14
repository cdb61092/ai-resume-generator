import { Chip, Input } from '@nextui-org/react'
import React from 'react'

export const Languages = ({ currentLanguages }) => {
    const [languages, setLanguages] = React.useState<string[]>(currentLanguages)
    const [languageInput, setLanguageInput] = React.useState<string>('')

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            setLanguages([...languages, languageInput])
            setLanguageInput('')
        }
    }

    const handleRemoveLanguage = (languageToRemove) => {
        setLanguages(languages.filter((language) => language !== languageToRemove))
    }

    return (
        <>
            <Input
                label="Languages"
                value={languageInput}
                onKeyDown={handleKeyPress}
                onChange={(e) => setLanguageInput(e.target.value)}
            />
            <div className="flex flex-wrap gap-2">
                {languages.map((language, index) => {
                    return (
                        <>
                            <Input
                                key={index}
                                type="hidden"
                                className="hidden"
                                value={language}
                                name="languages"
                            />
                            <Chip key={index} onClose={() => handleRemoveLanguage(language)}>
                                {language}
                            </Chip>
                        </>
                    )
                })}
            </div>
        </>
    )
}
