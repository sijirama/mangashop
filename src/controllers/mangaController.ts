import * as Express from "express";
import MangaModel, { MangaType } from "../models/Manga";
import { SaveOptions } from "mongoose";

function GetAllManga(request: Express.Request, response: Express.Response) {
  console.log(request.method, request.url);
  return response.status(200).json({
    success: true,
    data: "Thank you for trying to get the managa from our store",
  });
}

function AddManga(request: Express.Request, response: Express.Response) {
  const mangaData = request.body;

  const manga: MangaType = {
    name: mangaData.name,
    author: mangaData.author,
    description: mangaData.description,
    edition: mangaData.edition,
    volume: Number(mangaData.volume),
    genres: [mangaData.genres],
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

function DeleteManga(request: Express.Request, response: Express.Response) {
  const {} = request.params;
  console.log("DELETE");
}

function GetMangaByID(request: Express.Request, response: Express.Response) {
  const { id } = request.params;
  console.log(`GETID ${id}`);
}

export { GetAllManga, AddManga, UpdateManga, DeleteManga, GetMangaByID };
