const mongoose = require('mongoose');
const URI = 'mongodb://127.0.0.1:27017/moodizen_db'

const connectDb = async()=>{
  try {
    await mongoose.connect(URI)
    console.log('connected sucssesfully 👍')

  } catch (error) {
    console.error('connection failed')
  }
}

module.exports = connectDb