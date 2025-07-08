

const API_KEY = import.meta.env.VITE_API_KEY;

export async function evaluateAnswers(prompt) {
 const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": window.location.href,
          "X-Title": "DeepSeek Chat"
        },
        body: JSON.stringify({
          "model": 'mistralai/mistral-small-3.2-24b-instruct',
          messages: [{ role: 'user', content:prompt }],
        })
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      return data.choices[0].message.content.trim();

}
