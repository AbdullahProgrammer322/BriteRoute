import express from 'express';
import {
  createCompanyInfo,
  getAllCompanyInfo,
  getCompanyInfoById,
  updateCompanyInfo,
  deleteCompanyInfo,
} from '../controllers/company-InfoController.js';

const router = express.Router();

router.post('/', createCompanyInfo);
router.get('/', getAllCompanyInfo);
router.get('/:id', getCompanyInfoById);
router.put('/:id', updateCompanyInfo);
router.delete('/:id', deleteCompanyInfo);

export default router;
