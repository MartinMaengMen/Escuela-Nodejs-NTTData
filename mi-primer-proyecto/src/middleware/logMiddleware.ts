import { NextFunction, Request, Response } from "express";

const logMiddleware = (req : Request, res:Response, next: NextFunction) => {
    //const header = req.header
    /*const userAgent = header["user-header"];
    console.log("user-agent",userAgent)*/
    /*console.log(`Iniciando Log`,req,res)
    next();*/
    /*res.status(401)
    res.send('Restringido')*/
    const header = req.headers;
    const userAgent = header["user-agent"];
    console.log("user-agent", userAgent);
    next();
};
export {logMiddleware};