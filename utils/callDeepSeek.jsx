// src/utils/deepseekApi.js
const API_KEY = import.meta.env.VITE_API_KEY;

export async function callDeepSeek() {
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
          messages: [{ role: 'user', content:`Generate a JSON object containing Java programming questions in the exact same format as the provided example. The structure should include four sections (SectionA, SectionB, SectionC, SectionD) with the following requirements:

1. **SectionA**: Multiple Choice Questions (12 questions, 1 mark each)  
   - Each question must have:  
     - \`question\`: Clear Java-related question  
     - \`options\`: 4 plausible distractors  
     - \`answer\`: Exact correct option  

2. **SectionB**: Short Answer Questions (2 questions)  
   - Conceptual/theoretical questions requiring 2-3 line answers  

3. **SectionC**: Short Notes (5 topics, answer any 4)  
   - List Java OOP/core concepts suitable for brief explanations  

4. **SectionD**: Programming Questions (3 problems, answer any 2)  
   - Practical coding tasks (10 marks each) with clear requirements  

**Example Format**:
\`\`\`json
{
  "paper1": {
    "SectionA": {
      "instructions": "...",
      "questions": [{...}, ...]
    },
    // Other sections...
  }
}
\`\`\`

**Focus Areas**:
- Core Java (OOP, syntax, collections, exceptions)  
- Practical coding scenarios  
- Avoid duplicate questions from the example provided  

**Key Requirements**:  
- Maintain identical JSON structure  
- All questions must be original  
- SectionA answers must match exactly with options  
- Programming questions should include actionable tasks (e.g., "Write a program that...") .Remember do no include any header or footer text to give context i just want a json response only.also the format for section c is like this  SectionC: {
      instructions: "Short Notes (Answer any 4, 2 marks each)",
      topics: [
        "Object class in Java",
        "Keywords break vs continue",
        "Role of access modifiers",
        "Use of instanceof operator",
        "Difference between class and interface",
      ],
    }, ` }],
        })
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      return data.choices[0].message.content.trim();

}
