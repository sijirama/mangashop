import * as Express from 'express';


function getAllManga (request:Express.Request , response:Express.Response ){
    console.log(request.method , request.url)
    return response.status(200).json({success:true , data:"Thank you for trying to get the managa from our store"})
}


export {getAllManga}