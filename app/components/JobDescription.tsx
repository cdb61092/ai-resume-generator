import React from 'react'

export function JobDescription({ description, descriptionHTML }) {
    console.log()
    return (
        <div className="text-lg pt-5">
            {descriptionHTML ? (
                <div
                    dangerouslySetInnerHTML={{ __html: descriptionHTML }}
                    className="htmlDescription"
                />
            ) : (
                description.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br />
                    </React.Fragment>
                ))
            )}
        </div>
    )
}
