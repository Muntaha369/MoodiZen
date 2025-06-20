const express = require('express');
const router = express.Router();
const {Signup} = require('../controllers/authController')

router.get('/',(req,res)=>{res.json({msg:"wassup!!"})});
router.post('/signup',Signup);

module.exports = router