import { Chip, Input } from '@nextui-org/react'
import { capitalize } from '~/utils'
import React from 'react'

export const ChipSelect = ({ currentItems, collectionName }) => {
    const [items, setItems] = React.useState<string[]>(currentItems ?? [])
    const [itemInput, setItemInput] = React.useState<string>('')

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            setItems([...items, itemInput])
            setItemInput('')
        }
    }

    const handleRemoveItem = (itemToRemove) => {
        setItems(items.filter((item) => item !== itemToRemove))
    }

    return (
        <>
            <Input
                label={capitalize(collectionName)}
                value={itemInput}
                onKeyDown={handleKeyPress}
                onChange={(e) => setItemInput(e.target.value)}
            />
            <div className="flex flex-wrap gap-2">
                {items.map((item, index) => {
                    return (
                        <div key={index}>
                            <Input
                                key={index}
                                type="hidden"
                                className="hidden"
                                value={item}
                                name={collectionName}
                            />
                            <Chip
                                key={index}
                                variant="bordered"
                                color="secondary"
                                onClose={() => handleRemoveItem(item)}>
                                {item}
                            </Chip>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
