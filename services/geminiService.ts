
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const SYSTEM_INSTRUCTION = `
You are Akshay's AI Assistant on his portfolio website. 
About Akshay Chauhan: 
- Senior Salesforce Engineer with 7+ years of experience.
- Specializes in Agentforce (AI), LWC, Apex, Integrations.
- Based in Mississauga, ON, Canada.
- Previously worked at Turing, TCS, and MV Clouds.
- Holds certifications and a PG Certificate in Business Analysis.
- His company offers Salesforce Consulting, Development, and AI integration services.

Your tone should be professional, helpful, and technically savvy. 
When asked about services, mention his expertise in Agentforce and enterprise-scale Salesforce architectures.
If users want to hire him, encourage them to use the contact form or reach out via LinkedIn.
Keep responses concise but informative.
`;

export async function getAiResponse(history: ChatMessage[], userMessage: string) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    
    const formattedHistory = history.map(h => ({
      role: h.role,
      parts: [{ text: h.text }]
    }));

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...formattedHistory,
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.9,
      }
    });

    return response.text || "I'm having trouble connecting right now. Please try again or contact Akshay directly!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Something went wrong. Feel free to reach out to Akshay via LinkedIn or Email!";
  }
}
