import 'dotenv/config';
import fetch from 'node-fetch';

const HF_TOKEN = process.env.HF_TOKEN?.trim();
const MODEL = 'HuggingFaceH4/zephyr-7b-beta'; // switch to DeepSeek after this works

if (!HF_TOKEN) {
  console.error('❌ Missing HF_TOKEN in .env');
  process.exit(1);
}

const url = `https://api-inference.huggingface.co/models/${encodeURIComponent(MODEL)}`;
console.log('Token length:', HF_TOKEN.length);
console.log('URL:', url);

const res = await fetch(url, {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${HF_TOKEN}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    inputs: 'Write a one-sentence bedtime story about a unicorn.',
    options: { wait_for_model: true },
  }),
});

const text = await res.text();
if (!res.ok) {
  console.error('HTTP', res.status, res.statusText);
  console.error('Body:', text);
  process.exit(1);
}
console.log(JSON.parse(text));
