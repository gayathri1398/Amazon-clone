import express from 'express';
import data from './data.js';


const app = express();

/*
Route          /
Des           get all the products
Params        none
Access        public
Method        GET
*/

app.get("/api/products",(req,res)=>{
    res.send(data.products)
})
/*
Route          /
Des           get all the products
Params        id
Access        public
Method        GET
*/
app.get("/api/products/:_id",(req,res)=>{
    
    const specificProduct = data.products.find((x) => Number(x._id)===Number(req.params._id));
 
    if(specificProduct){
        res.send(specificProduct);
    }else{
        res.status(404).send({message:"Sorry!Product not found!!"})
    }
});



app.get("/", (req,res)=> res.json({"message":"connected succesfully!! you have done it!!!"}))

const port = process.env.PORT ||5000;

app.listen(port, ()=>{
    console.log(`serve at http://localhost:${port}`)
})