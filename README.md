# gemini

A browser-based Gemini chat with persistent conversation history.

## Run and deploy

The page calls the same-origin `/api/chat` serverless function. Deploy it to Vercel and set `GEMINI_API_KEY` in the project environment variables. Do not put the API key in the browser or in `index.html`.

The model selector currently supports `gemini-3.1-flash-lite-preview` and `gemini-3.5-flash-lite`. Antigravity is shown as unavailable until its API endpoint and model identifier are configured.

Conversation messages, including prompts waiting for a response, are saved to this browser's `localStorage`. Pending requests are retried after a page reload. Use **Clear chat** to remove the stored conversation.