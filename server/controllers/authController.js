const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/schema');
const secretKey = "1209348756"

const Signup = async(req,res)=>{
  const { email, password } = req.body;
  const userExist = await User.findOne({email});

  if (userExist){
    return res.status(401).json({msg:"user already exists"})
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

  res.status(200).json({
    msg:'user Created sucssesfully',
    TOKEN,
  })

}

const Login = async(req,res)=>{
  const { email, password } = req.body;
  const userExist = await User.findOne({email});
  
  if(!userExist) {return res.status(401).json({msg:'User do not exist'})}

  const isPasswordValid = await bcrypt.compare(password, userExist.password);
 
  if (!isPasswordValid) {
    return res.status(401).json({ msg: "Invalid credentials" });
  }

  const TOKEN = jwt.sign({
    userId: userExist._id.toString(),
      email: userExist.email,
    },
      secretKey
    ,
    {
      expiresIn: "30d",
    }
  );
  
  res.status(200).json({
    msg:'logged in successfully',
    TOKEN
  })
  
}

module.exports = { Signup, Login } 