import { Request,Response } from "express"
import { getEnabledCategories } from "trace_events";
import { deleteCar, getCar, getCars, insertCar, updateCar } from "../services/items";
import handleHttp from "../utils/error.handler";
const getItem = async ({params} : Request, res : Response) =>{
try{
    const {id} = params
    const response = await getCar(id)
    const data = response ? response : 'NOT_FOUND'
    res.send(data)
}
catch (e){
    handleHttp(res,"ERROR_GET_ITEM");
}
}
const getItems = async (request : Request, res : Response) =>{
    try{
        const response = await getCars()
        res.send(response)
    }
    catch (e){
        handleHttp(res,"ERROR_GET_ITEMS");
    }
}

const updateItem = async ({body} : Request, res : Response) =>{
    try{
        const responseItem = await updateCar(body);
        res.send(responseItem)
    }
    catch (e){
        handleHttp(res,"ERROR_UPDATE_ITEM");
    }
}
const addItem = async ({body} : Request, res : Response) =>{
    try{
        const responseItem = await insertCar(body);
        res.send(responseItem)
    }
    catch (e){
        handleHttp(res,"ERROR_ADD_ITEM");
    }
}
const deleteItem = async ({params} : Request, res : Response) =>{
    try{
        const {id} = params
        const response = await deleteCar(id);
        const data = response ? response : 'NOT_FOUND'
        res.send(data)
    }
    catch (e){
        handleHttp(res,"ERROR_DELETE_ITEM");
    }
}
export {getItem,getItems,addItem,updateItem,deleteItem}