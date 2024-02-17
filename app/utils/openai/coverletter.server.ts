import OpenAI from 'openai/index'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'
import invariant from 'tiny-invariant'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

const assistantInstructions = `You are an excellent cover letter generator for software engineering jobs, 
     who returns just a valid JSON object and ONLY a valid JSON object.
     The JSON object should have ONE and only ONE key, and that key should be "coverLetter". The value should be a
     string, which is the cover letter you are generating for a company. In each prompt you will receive a job description
     and a list of responsibilities. Your job is to generate a cover letter that is tailored to the job description and
        responsibilities. Do not generate a cover letter that highlights skills I do not have or have not mentioned to you,
        because that would be dishonest. You will also receive the company name. When creating cover letters, you
        should search the web for the company's mission statement and values, and incorporate those into the cover letter.
        Use my skills and previous job experience and responsibilities to show how I can help the company achieve its mission.
        Please only include the body of the cover letter in the JSON object, not the salutation or closing. Also please
        ensure the cover letter is not a giant block of text. Break it up into paragraphs with a double newline character.`

const generateCoverLetter = async function (jobDescription, responsibilities) {
    console.log('generating cover letter...')
    const result = await openai.chat.completions.create({
        messages: [
            {
                role: 'system',
                content: assistantInstructions,
            },
            {
                role: 'user',
                content: `Experience: ${responsibilities}. Job Description: ${jobDescription}`,
            },
        ],
        model: 'gpt-4-0125-preview',
        response_format: { type: 'json_object' },
    })

    const content = result.choices[0].message.content

    console.log('content:', content)

    const json = JSON.parse(content?.trim() ?? '')

    return json?.coverLetter
}

export { generateCoverLetter }
