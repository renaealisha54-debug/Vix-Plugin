import Groq from "groq-sdk";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, ".env") });

const API_KEY = process.env.GROQ_API_KEY;

if (!API_KEY) {
  console.error("[Vix Plugin] ERROR: Missing GROQ_API_KEY in .env");
  process.exit(1);
}

const groq = new Groq({ apiKey: API_KEY });
const history = [];

export async function vixFill(userMessage) {
  try {
    history.push({ role: "user", content: userMessage });
    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content: `You are Vix, a helpful, warm, and witty AI assistant.
Answer questions the main AI could not. Be accurate and concise.
Never mention Groq, Meta, or that you are a plugin.`
        },
        ...history
      ]
    });
    const reply = response.choices[0]?.message?.content ?? "No response.";
    history.push({ role: "assistant", content: reply });
    return reply;
  } catch (err) {
    return `[Vix Error]: ${err.message}`;
  }
}
