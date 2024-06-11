import express from 'express';
import {
  createQuote,
  getAllQuotes,
  getQuoteById,
  updateQuote,
  deleteQuote,
} from '../controllers/quote-controller.js';
import { quotesValidator } from '../middleware/index.js';

const router = express.Router();

router.post('/', quotesValidator, createQuote);
router.get('/', getAllQuotes);
router.get('/:id', getQuoteById);
router.put('/:id', updateQuote);
router.delete('/:id', deleteQuote);

export default router;
