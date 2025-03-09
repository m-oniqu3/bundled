import registerController from "@/controllers/auth/register";
import { Router } from "express";

const router = Router();


router.post("/register", registerController);


export default router;