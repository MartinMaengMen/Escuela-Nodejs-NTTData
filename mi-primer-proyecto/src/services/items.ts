import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/items";

const insertCar = async (item : Car) => {
    const responseInsert = await ItemModel.create(item);
    return responseInsert;
}
const getCar = async (id : string)=>{
    const responseItem = await ItemModel.findOne({_id:id});
    return responseItem;
}
const getCars = async ()=>{
    const responseItems = await ItemModel.find();
    return responseItems;
} 
const deleteCar =  async (id : string)=>{
    const responseItem = await ItemModel.deleteOne({_id:id});
    return responseItem;
}
const updateCar =  async (item : Car)=>{
    const responseItem = await ItemModel.updateOne(item);
    return responseItem;
}
export {insertCar,getCar,deleteCar,getCars,updateCar};