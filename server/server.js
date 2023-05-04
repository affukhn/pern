require('dotenv').config();
const express = require("express")

const app= express()
const morgan=require("morgan")
const db=require('./db');
const { copyFileSync } = require('fs');
app.use(express.json())
//app.use(morgan('tiny'))   
// app.use((req,res,next)=>{
//     console.log('i am middle ware')
//     next();
// })


app.get('/api/v1/getRestaurants',async(req,res)=>{
    
      try {
        const result =await db.query('select * from restaurants');
        res.status(200).json({
            status : "successfull",
            results: result.rows.length,
            data: {
                restaurants: result.rows
                        },
        })
    
      } catch (error) 
      {
        console.log(error) 
      }
     
   
})

app.get('/api/v1/getRestaurants/:name',async(req,res)=>
{
    
        const result= await db.query(`select * from restaurants where name='${req.params.name}'`)
         console.log(result)
        if(result.rowCount==0)
        {

            const error= new Error('no rows selected')
            res.status(400).json({
                ">> " : require('util').inspect(error)

            })
            
            

        }
        else{
            res.status(200).json({
                data:result.rows[0]
            })

        }  

})
app.put('/api/v1/getRestaurants/:name',async(req,res)=>
{
    
        console.log(req.body.location)
        const result= await db.query(`update restaurants set location='${req.body.location}' where name='${req.params.name}' returning location`)
     
       
            res.status(200).json({
                data:result.rows
            })

          

})

app.delete('/api/v1/getRestaurants/:name',async(req,res)=>
{
    
        
        const result= await db.query(`delete from restaurants where name='${req.params.name}' returning location`)
     
       
            res.status(200).json({
                data:result.rows
            })

          

})

app.post('/api/v1/newRestaurants',async(req,res)=>
{
 
    console.log(req.body.name)
    try 
    {
      const result= await db.query(`insert into restaurants(name,location,price_range) values('${req.body.name}','${req.body.location}',${req.body.price_range}) returning *`)    
      console.log(result.rows)
      res.status(200).json({
        data:result.rows[0]
    })
    } 
    catch (error) 
    {
        
    }
    

   

})


// console.log('hello')
const port=process.env.PORT

// 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

app.listen(port,()=>
{
    
    console.log(`server is up  and listening on ${port} `)
})                             