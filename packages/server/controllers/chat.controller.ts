import z from 'zod';
import type { Request, Response } from 'express';
import { chatService } from '../sevices/chat.service';

// Implementation Details
const chatSchema = z.object({
   prompt: z
      .string()
      .trim()
      .min(1, 'Prompt is required')
      .max(1000, 'Prompt is too long (should be less than 1000 charecters)'),
   conversation_id: z.uuid('Conversion Id is required'),
});

// Public Interface
export const chatController = {
   async sendMessage(req: Request, res: Response) {
      // Request Validation
      const schemaResult = chatSchema.safeParse(req.body);
      if (!schemaResult.success) {
         return res.status(400).json(z.treeifyError(schemaResult.error));
      }

      try {
         const { prompt, conversation_id: conversationId } = req.body;
         const response = await chatService.sendMessage(prompt, conversationId);
         return res.send({ message: response.message });
      } catch (err: unknown) {
         res.status(500);
         const resBody = { error: 'Unable to generate response' };
         if (err instanceof Error) {
            resBody.error = err.message;
         }
         return res.json(resBody);
      }
   },
};
