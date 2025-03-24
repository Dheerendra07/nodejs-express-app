const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

app.get('/', (req, res) => {
res.send('Hello World!')
})

app.get('/products',(req,res)=>{
    res.send({
        products : [{id:1,name:'Colagte'}]
    })
})

app.get('/welcome', (req, res) => {
    res.send('Hello Raj')
})

app.get('/welcome/:name/:id', (req, res)=>{
    console.log('my params',req.params)
    res.send({message:`Welcome to nodejs learning ${req.params.name} and ${req.params.id}`})
})

app.get('/getUserName', (req, res) =>{
    console.log('Query params ', req.query)
    res.send({message:`You have successfully find your user ${req.query.userName}`})
})

const saveUser = (req,res)=>{
    console.log('>>>>>',req.body)
res.send({message:'your user is saved in DB'})
}

app.post('/user',saveUser);

// This API is userd for saving the product entries in DB
/* START */
const saveProduct = (req, res) =>{
    console.log('saving the product', req.body)
     return res.send({message:'product saved in DB and well done'})
}
app.post('/product', saveProduct);
/*END */




app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})