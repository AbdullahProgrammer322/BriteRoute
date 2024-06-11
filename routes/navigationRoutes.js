import express from 'express';

import {
  addNavigationItem,
  getAllNavigationItems,
} from '../controllers/navigationController.js';
const router = express.Router();

router.get('/', getAllNavigationItems);
router.post('/', addNavigationItem);

export default router;
