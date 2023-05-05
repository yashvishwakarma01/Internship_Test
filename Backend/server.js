const express=require('express')
const connect=require('./database')
const axios=require('axios')
const path=require('path')
const model=require('./schema')


const app=express()

connect()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

app.get('/',async(req,res)=>{
    const data=await model.find({})
  
    res.render('index.ejs',{data})
})



app.post("/",async(req,res)=>{
      
     var response=await axios.get('https://api.wazirx.com/api/v2/tickers')
     var i=0
     response=response.data;
        for(let key in response){
            const create=new model(response[key]);
            await create.save();
            i=i+1
            if(i===10){
                break;
            }
        }
   
       res.status(201).send('success')
})
     


app.listen(5000,(err)=>{
    console.log(`server is listening on PORT 5000`);
})