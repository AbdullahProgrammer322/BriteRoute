import express from 'express';
import companyinfoRoutes from './company-inforoutes.js';
import quoteRoutes from './quoteRoutes.js';
import navbarRoutes from './navigationRoutes.js';
const router = express.Router();

router.use('/company-info', companyinfoRoutes);
router.use('/quotes', quoteRoutes);
router.use('/navbar', navbarRoutes);
export default router;
