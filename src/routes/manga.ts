import  Express  from "express";
import * as mangaController from "../controllers/mangaController"
const router = Express.Router();

router.route('/')
    .get(mangaController.getAllManga)
    .post()
    .put()
    .delete()

router.route("/:id")
    .get()

export { router as MangaRoute }