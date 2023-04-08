import * as Express from "express";
import MangaModel, { MangaType } from "../models/Manga";
import mongoose, { SaveOptions } from "mongoose";
import { ObjectId } from "mongodb";

async function GetAllManga(
  request: Express.Request,
  response: Express.Response
) {
  const allManga = await MangaModel.find({});
  if (allManga.length > 0) {
    return response.status(200).json({
      success: true,
      data: allManga,
    });
  } else {
    return response.status(200).json({
      success: true,
      description: "No Manga in the shop",
    });
  }
}

function AddManga(request: Express.Request, response: Express.Response) {
  const mangaData = request.body;

  const manga: MangaType = {
    name: mangaData.name,
    author: mangaData.author,
    description: mangaData.description,
    edition: mangaData.edition,
    volume: Number(mangaData.volume),
    genres: mangaData.genres,
  };

  const newManga = new MangaModel(manga);
  console.log(newManga);
  try {
    newManga.save();
    return response
      .status(201)
      .send({ success: true, data: "Successfully added a new Manga" });
  } catch (error) {
    return response.status(401).send({ success: false, error: error });
  }

  response.end();
}

function UpdateManga(request: Express.Request, response: Express.Response) {
  const {} = request.params;
  console.log("PUT");
}

async function DeleteManga(request: Express.Request, response: Express.Response) {
  const {id} = request.body;
  const manga:any = await MangaModel.find({ _id: id }).exec();

  if (manga){
    try {
      await MangaModel.deleteOne({_id: id})
      return response.status(200).send({ success: true,response:`Successfully deleted ${manga.name}`})
    } catch (error) {
      return response.status(400).json({success: false, data:`Error deleting ${manga.name}`})
    }
  }else{
    return response.status(400).json({success: false, data:"No manga found"})
  }

  console.log("DELETE");
}

async function GetMangaByID( request: Express.Request, response: Express.Response
) {
  const { id } = request.params;
  console.log(`GETID ${id}`);
  const mangaById = await MangaModel.find({ _id: id }).exec();
  if (mangaById) {
    return response.status(200).json({
      success: true,
      data: mangaById,
    });
  }else{
    return response.status(400).json({success: false, data:"No manga found"})
  } 
}

export { GetAllManga, AddManga, UpdateManga, DeleteManga, GetMangaByID };
