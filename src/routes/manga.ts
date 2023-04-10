import  Express  from "express";
import * as mangaController from "../controllers/mangaController"
const router = Express.Router();
import { verifyJWT } from "../middleware/verifyJWT";

router.route('/')
    .get(verifyJWT , mangaController.GetAllManga)
    .post(mangaController.AddManga)
    .put(mangaController.UpdateManga)
    .delete(mangaController.DeleteManga)

router.route("/:id")
    .get(mangaController.GetMangaByID)

export { router as MangaRoute }