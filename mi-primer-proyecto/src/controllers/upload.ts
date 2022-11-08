import { Response } from "express";
import { RequestExt } from "../interfaces/req.ext";
import { Storage } from "../interfaces/storage";
import { registerUpload } from "../services/storage";
import handleHttp from "../utils/error.handler";

const getFile = async(req : RequestExt, res : Response)=>{
    try {
        const {user,file} = req;
        const dataToRegister : Storage = {
            fileName:`${file?.filename}`,
            idUser:`${user?.id}`,
            path:`${file?.path}`
        };
        const response = await registerUpload(dataToRegister)
        res.send(response)
    } catch (error) {
        handleHttp(res,"ERROR")
    }
};
export {getFile}