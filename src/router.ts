import { Router } from 'express';

const router = Router();

// list categories
router.get('/categories', (req, res) => {
  res.send('Ok');
});

// create category
router.post('/categories', (req, res) => {
  res.send('OK');
});

// list products
router.get('/products', (req, res) => {
  res.send('OK');
});

// create product
router.post('/products', (req, res) => {
  res.send('OK');
});

// Get product by category
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('OK');
});

// list orders
router.get('/orders', (req, res) => {
  res.send('OK');
});

// create order
router.post('/orders', (req, res) => {
  res.send('OK');
});

// change order status
router.patch('/orders/:orderId', (req, res) => {
  res.send('OK');
});

// delete order
router.delete('/orders/:orderId', (req, res) => {
  res.send('OK');
});

export default router;
