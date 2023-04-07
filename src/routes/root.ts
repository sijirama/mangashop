
import  Express  from "express";
import * as mangaController from "../controllers/mangaController"
const router = Express.Router();

router.route('/')
    .get((request , response) => {
        console.log(request.url , request.method)
        response.status(200).json({data:"Thank for using my api"})
    })


export { router as RootRoute}