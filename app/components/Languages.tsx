import React from 'react'
import { Chip, Input } from '@nextui-org/react'
import { useFieldList, list } from '@conform-to/react'

export const Languages = ({ form, languages }) => {
    const languageList = useFieldList(form.ref, languages)

    const handleClose = (languageToRemove, index) => {
        list.remove(languageToRemove, index)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            const val = e.target.value.trim()
            list.insert(languages.name, {
                defaultValue: val,
            })
        }
    }

    return (
        <>
            <div>
                <button {...list.insert(languages.name)}>Add task</button>
            </div>
            <div className="flex flex-wrap gap-2">
                <Input onKeyDown={handleKeyPress} />
                {languageList.map((language, index) => (
                    <Chip
                        key={index}
                        onClose={() => handleClose(language, index)}
                        defaultValue=""></Chip>
                ))}
            </div>
        </>
    )
}
