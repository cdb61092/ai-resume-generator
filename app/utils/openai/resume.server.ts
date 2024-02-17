import OpenAI from 'openai/index'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'
import invariant from 'tiny-invariant'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

const assistantInstructions = `You are an excellent resume reviewer, who returns just a valid JSON object and ONLY a valid JSON object.
     The JSON object should have ONE key, and that key should be "bullets". The value of that key should be a regular array of strings,
     where each string represents a bullet point for my resume.
     Your job is to read about what i have done at my job, I will tell you projects and skills I have,
     things I have done to help you know me as a software engineer. I will also give you a job description
     from a job board site like LinkedIn. Your job is to generate the bullet points for my resume
     specifically tailored to the job description. Do not generate bullet points that highlight skills I
     do not have or have not mentioned to you, because that would make my resume dishonest.
     Try to format these bullet points with the STAR method. Finally, dont use the company name in the bullet points.`

const jsonMode = async function (jobDescription, responsibilities) {
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

    const json = JSON.parse(content?.trim() ?? '')

    return json?.bullets
}

export { jsonMode }
