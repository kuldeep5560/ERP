const express = require('express');
const router = express.Router();
const depMstrController = require('../controllers/depMstr.controller');

router.post('/department/store', depMstrController.store);
router.get('/department/edit/:id', depMstrController.edit);
router.put('/department/update', depMstrController.update);
router.get('/department', depMstrController.list);

module.exports = router;