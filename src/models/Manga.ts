import mongoose from "mongoose";

type MangaType = {
    name: string,
    description: string,
    author: string,
    edition: string,
    volume: number,
    genres: string[]
}

export const MangaSchema = new mongoose.Schema<MangaType>({
    name:{type: String, required: true}, 
    description:{type: String, required: true}, 
    author:{type: String, required: true}, 
    edition:{type: String}, 
    volume:{type: Number , required: true},
    genres:{type:[String]} 
});


const MangaModel = mongoose.model<MangaType>("Spell", MangaSchema);

export default MangaModel;