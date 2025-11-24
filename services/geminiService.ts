import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Initialize the client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// System instruction to simulate the "Healthy Routine ML Chatbot" behavior described in the PDF
const SYSTEM_INSTRUCTION = `
You are the "Healthy Routine ML Chatbot", a project developed by a 2nd year student.
Your goal is to generate a personalized healthy daily routine for the user.

Follow this logic flow (simulating the ML model described in the project report):
1. Ask the user for their name and basic details (age, occupation).
2. Ask questions to determine their "routine intensity" (e.g., sedentary, moderate, active) and "routine type" (e.g., student, working professional, early riser).
3. Ask about their sleep habits and screen time usage.
4. Once you have enough information, generate a complete structured daily routine (Morning, Afternoon, Evening, Night).
5. Provide specific recommendations based on their screen time.

Keep your tone helpful, encouraging, but straightforward. Do not be overly flowery.
Format the final routine clearly with bullet points.
`;

let chatSession: Chat | null = null;

export const initializeChat = () => {
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
    },
  });
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    initializeChat();
  }

  try {
    if (chatSession) {
      const result: GenerateContentResponse = await chatSession.sendMessage({ message });
      return result.text || "I'm having trouble thinking of a response right now.";
    }
    return "Chat session not initialized.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error while processing your request. Please try again.";
  }
};