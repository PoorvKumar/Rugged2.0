import express from "express";
import { getProducts } from '../cotrollers/client.js'
import { getCustomers,getTransactions,getGeography} from "../cotrollers/client.js";
const router = express.Router();

router.get('/products',getProducts)
router.get('/customers',getCustomers)
router.get('/transactions', getTransactions)
router.get('/geography',getGeography)
export default router;
