import mongoose from 'mongoose';
import config from '../../config.js';

export const URI = config.db.mongodbUri;

export const init = async () => {
  try {
    await mongoose.connect(URI);
    console.log('Database conected 🚀');
    
  } catch (error) {
    console.log('Ah ocurrido un error al intentar conectarnos a la DB', error.message);
  }
}


// MongoDb Atlas
// user: developer
// pass: LeuUQkqrnaBPzQ0c
// mongodb+srv://developer:LeuUQkqrnaBPzQ0c@cluster0.ssusme2.mongodb.net/?retryWrites=true&w=majority