const express = require('express');
const router  = express.Router();
const services = require('../Services/userServices');

router.get('/users',services.getusers);
router.post('/user',services.postuser);
router.put('/update/:email',services.updateusers);
router.delete('/delete/:email',services.deleteusers);

module.exports = router;