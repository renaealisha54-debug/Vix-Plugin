# vix-plugin

Vix is a drop-in AI fallback plugin powered by Groq.
Automatically fills blank responses in any existing AI app.

## How it works
1. Your AI checks its default responses
2. If it has no answer, Vix steps in using Groq/LLaMA
3. Your users always get a real, helpful reply

## Setup
1. Clone this repo
2. Run: npm install
3. Copy .env.example to .env and add your Groq API key
4. Run: node test.js

## Get API key
https://console.groq.com/keys

## Integration
import { vixFill } from "./vix-plugin/index.js";

async function getResponse(userMessage) {
  const defaultReply = checkDefaultResponses(userMessage);
  if (defaultReply) {
    return defaultReply;
  } else {
    return await vixFill(userMessage);
  }
}

## Requirements
- Node.js v18+
- Groq API key (free at console.groq.com)
EOF
