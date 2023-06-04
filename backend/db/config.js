const mongoose= require('mongoose')
 
const uri = 'mongodb+srv://yadav:Yadav123@cluster0.y0pvkqz.mongodb.net/contactlist?retryWrites=true&w=majority';
mongoose.set('strictQuery', false);


mongoose.connect(uri, {
  useNewUrlParser: true,
   
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    // Your code here
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });
