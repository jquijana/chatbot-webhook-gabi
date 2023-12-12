import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import webhookController from '../controllers/webhookController.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const router = express.Router();

router.get('/', webhookController.getWebhook);
router.post('/', webhookController.postWebhook);

router.get('/privacy', (req, res) => {
    const filePath = path.join(__dirname, '../views/privacy.html');
    res.sendFile(filePath);
});

export default router;
