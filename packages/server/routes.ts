import { Router } from 'express';
import { chatController } from './controllers/chat.controller';
import type { Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
   return res.send('Hello World!');
});

router.get('/api/', (req: Request, res: Response) => {
   return res.json({
      message: 'Hello World!',
   });
});

router.post('/api/chat', chatController.sendMessage);

export default router;
