import OpenAI from "openai";
import "dotenv/config"
import fs from "fs";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});


const upload = await openai.files.create({
    file: fs.createReadStream("./forBot.jsonl"),
    purpose: "fine-tune",
})

// console.log(upload);

///file-SCoDpXDGGnyq3oL6KES9Mk

const status = await openai.fineTuning.jobs.retrieve('ftjob-9HqXuLp7MnMxgg5axgq0h8Tq');

console.log(status);