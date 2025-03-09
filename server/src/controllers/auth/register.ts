import { Request, Response } from "express";

// todo: properly type the return value
 async function register(req: Request, res: Response) : Promise<any> {
    try {
        console.log('hitting register controller');

        console.log(req.body);
        
        return res.status(201).json({ message: "Register success" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
 }

 export default register;