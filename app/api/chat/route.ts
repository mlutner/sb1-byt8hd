import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
 
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
 
export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [
      {
        role: 'system',
        content: 'You are an empathetic financial wellbeing therapist. Help users navigate their financial journey with understanding and support, addressing both practical financial matters and emotional aspects of money management. Provide guidance that considers both financial and emotional wellbeing.',
      },
      ...messages,
    ],
  });
 
  const stream = OpenAIStream(response);
 
  return new StreamingTextResponse(stream);
}