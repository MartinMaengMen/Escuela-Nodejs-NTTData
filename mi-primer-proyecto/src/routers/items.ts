import {Router, Request, Response} from "express";
import { getItem,getItems,addItem, deleteItem, updateItem } from "../controllers/items";
import { logMiddleware } from "../middleware/logMiddleware";

const router = Router();

//http://localhost:3000/items [GET|POST|DELETE|PUT]
router.get('/:id',logMiddleware,getItem)
router.get('/',logMiddleware,getItems)
router.delete('/:id',logMiddleware,deleteItem)
router.put('/',logMiddleware,updateItem)
router.post('/',logMiddleware,addItem)
/*router.get('/',(request : Request, response : Response)=>{
    response.send({data : "Se envia este dato.<Martín Ng>..."})
});*/
export {router};