import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes';
import blogRouter from './routes/blog-routes';

const app = express();
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog", blogRouter);
console.log("Travel Blog");



mongoose
.connect('mongodb+srv://social_media:W1PSOexhzXuE8Bhb@cluster0.tzqbgxp.mongodb.net/Blog?retryWrites=true&w=majority')
.then(() => app.listen(5000))
.then(() => console.log("Connected"))
.catch((err) => console.log(err));


app.use("/api",(req,res,next) => {
    res.send("Hello");
})




// W1PSOexhzXuE8Bhb
