import {Router, Request, Response} from "express";
import { getItem,getItems,addItem } from "../controllers/items";

const router = Router();

//http://localhost:3000/items [GET|POST|DELETE|PUT]
router.get('/',getItem)
router.get('/',getItems)
router.post('/',addItem)
/*router.get('/',(request : Request, response : Response)=>{
    response.send({data : "Se envia este dato.<Martín Ng>..."})
});*/
export {router};