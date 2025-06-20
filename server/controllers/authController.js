const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/schema');
const secretKey = "1209348756"

const Signup = async(req,res)=>{
  const { email, password } = req.body;
  const userExist = await User.findOne({email});

  if (userExist){
    return res.json({msg:"user already exists"})
  }

  const saltRound = 10
  const hashPass = await bcrypt.hash(password,saltRound)

  const UserCreated = await User.create({email,password:hashPass})

  const TOKEN = jwt.sign({
      userId: UserCreated._id.toString(),
      email: UserCreated.email,
    },
      secretKey
    ,
    {
      expiresIn: "30d",
    }
  );

  res.json({
    msg:'user Created sucssesfully',
    TOKEN,
    user:UserCreated
  })

}

module.exports = {Signup} 