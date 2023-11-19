import OpenAI from "openai";
import { useState } from "react";

export default function OpenAiTest() {
    const [chatResponseData, setChatResponseData] = useState()
    const openai = new OpenAI(
        {apiKey: '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',
        dangerouslyAllowBrowser: true
    })

    async function printStuff() {
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo-0613",
            response_format: { "type": "json_object "},
            messages: [{role: "system", content: "You are a helpful assistant." }]
        });
        console.log(completion.choices[0])
        console.log("hi there")
        setChatResponseData(completion.choices[0])
    } 

    printStuff()

    return <div>
    {chatResponseData}
    </div>
}