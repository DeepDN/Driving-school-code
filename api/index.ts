import type { VercelRequest, VercelResponse } from '@vercel/node';
import express from 'express';
import { registerRoutes } from '../server/routes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let handler: any;

export default async function (req: VercelRequest, res: VercelResponse) {
  if (!handler) {
    await registerRoutes(app);
    handler = app;
  }
  
  return handler(req, res);
}
