const exp = require('express');
const axios = require('axios');
const app = exp()
const port = 3001

const json = {
    hello: "there"
}

app.get('/test',(q,s)=>{

    s.send(`${json}`)
    s.json(`${json}`)
})




async function getProds(id){
    const api = 'https://fakestoreapi.com/'
    let res;
    if(id) {res = await axios.get(api + `products/${id}`)}
    else {res = await axios.get(api + `products/${id}`)}
    console.log(res)
    return res.data;
}
app.get('/', async(q,s)=>{
   const prods = await getProds();
   const prod = await getProds(1);
   s.send(prod)
})

app.listen(port,()=>{
    console.log("listening")
})