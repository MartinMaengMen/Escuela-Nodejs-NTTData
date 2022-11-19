import express from "express"

const app = express()
const appId = process.env.APPID

app.get('/',(req,res)=>res.send(`${appId} Hola, te encuentras ejecutando tu primer microservicio`))

app.listen(app,()=>console.info(`${appId} estas escuchando desde nodo: `))