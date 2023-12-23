/** uncomment one of these **/
import { Configuration, OpenAI } from 'openai'
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)
// import { HfInference } from '@huggingface/inference'
let AIResponse = ''

const instructionObj = {
    role: 'system',
    content: `Generate a Christmas joke`
}

const responseContainer = document.getElementById('joke-display')

document.getElementById('window-container').addEventListener('click', async function () {
/**
 * 🎄 Challenge:
 * 1. When clicked, the doors should open
 *    to reveal a festive joke.
 * 
 * 🎁 hint.md for help!
 **/
    const context = [instructionObj]
    
    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: context,
        temperature: 0.63,
        presence_penalty: -0.37,
        frequency_penalty: 0.37,
        max_tokens: 30
    })
    AIResponse = response.data.choices[0].message.content
    responseContainer.innerHTML = AIResponse
    
    document.querySelector('.left-door').style = "animation: left-open 0.3s forwards"
    document.querySelector('.right-door').style = "animation: right-open 0.3s forwards"
    document.querySelector('.joke-display').style = "animation: display-joke 0.3s forwards"
})