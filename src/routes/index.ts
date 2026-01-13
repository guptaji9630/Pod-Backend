import { Router } from 'express';
import contactRouter from './contact.js';

const router = Router();

// Mount contact routes
router.use('/contact', contactRouter);

// API info endpoint
router.get('/', (_req, res) => {
  res.json({
    success: true,
    message: 'Portfolio API',
    version: '1.0.0',
    endpoints: {
      contact: '/api/contact',
      health: '/api/contact/health',
    },
  });
});

export default router;

