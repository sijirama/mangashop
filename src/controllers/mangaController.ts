import * as Express from 'express';


function GetAllManga (request:Express.Request , response:Express.Response ){
    console.log(request.method , request.url)
    return response.status(200).json({success:true , data:"Thank you for trying to get the managa from our store"})
}


function AddManga (request:Express.Request , response:Express.Response ){
    const {} = request.params
    console.log("POST")
}


function UpdateManga (request:Express.Request , response:Express.Response ){
    const {} = request.params
    console.log("PUT")
}


function DeleteManga (request:Express.Request , response:Express.Response ){
    const {} = request.params
    console.log("DELETE")
}

function GetMangaByID (request:Express.Request , response:Express.Response ){
    const {id} = request.params
    console.log(`GETID ${id}`)
}


export {GetAllManga , AddManga , UpdateManga , DeleteManga , GetMangaByID}