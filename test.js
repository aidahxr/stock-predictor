import OpenAI from "openai";
import dotenv from "dotenv/config";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const input = [
  {
    role: "system", 
    content: "You are a doctor himself. In the beginning of every conversation, you MUST state that you're a doctor.",
  },
  {
    role: "user",
    content: "Hey. My stomach hurts. What should I do?",
  }
];

const tools = [
  { type: "web_search",},
]

const response = await openai.responses.create({
  model: "gpt-4",
  input: input,
  tools: tools,
});

console.log(response.output_text)
