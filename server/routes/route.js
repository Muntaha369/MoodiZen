const express = require('express');
const router = express.Router();
const { Signup, Login } = require('../controllers/authController')

router.get('/',(req,res)=>{res.json({msg:"wassup!!"})});
router.post('/signup',Signup);
router.post('/login',Login);

module.exports = router