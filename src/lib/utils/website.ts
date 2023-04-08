import { PUBLIC_OPENAI_KEY } from "$env/static/public";
import {Configuration, OpenAIApi} from "openai";

const configuration = new Configuration({
    apiKey: PUBLIC_OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);


export const generateDescription = async (title:string) => {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {role: "user", content: "Esti autorul unui site care face recenzii si topuri pentru o varietate de produse de piata din Romania. Stilul tau de scriere este fara diacritice folosind cuvinte simple."},
            {role: "user", content: `Scrie un paragraf de introducere pentru o recenzie cu titlul ${title}"`},
        ],
    });
    return completion.data.choices[0].message?.content;
}



//? Helpers
//? ********

// const getEMAGProductData = async (url:string) => {

// }
