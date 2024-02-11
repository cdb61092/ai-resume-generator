import { excerpt } from '~/utils'
import { Form } from '@remix-run/react'

export const TableCellContent = ({ job, columnKey }) => {
    const cellValue = job[columnKey] || 'Gen'

    // Render skills as a comma separated list
    if (Array.isArray(cellValue)) {
        return cellValue.join(', ')
    }

    switch (columnKey) {
        case 'title':
            return <a href={`/jobs/${job.id}`}>{cellValue}</a>

        // Display only the first x characters of the description
        case 'description':
            return excerpt(cellValue)

        case 'generateResume':
            return (
                <Form action={'/resources/resume/create'} navigate={false} method={'post'}>
                    <input type="hidden" name="jobDescription" value={job.description} />
                    <input type={'submit'} value={'Create Resume'} />
                </Form>
            )

        // If no special cases match, just return the cell value
        default:
            return cellValue
    }
}
