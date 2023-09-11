const router = require('express').Router();
const employeeRoutes = require('./employee-routes');
const itemRoutes = require('./item-routes');
const saleRoutes = require('./sale-routes');

router.use('/employees', employeeRoutes);
router.use('/items', itemRoutes);
router.use('/sales', saleRoutes);

module.exports = router;