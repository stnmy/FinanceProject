import axios from "axios"
import { CommentGet, CommentPost } from "../Models/Comment"
import { handleError } from "../Helpers/ErrorHandler"


const api = "https://localhost:7012/api/comment/"

export const commentPostAPI = async (title: string, content: string, symbol: string) => {
    try {
        console.log("Here before i call the api")
        const data = await axios.post<CommentPost>(api + `${symbol.toLowerCase()}`,{
            title : title,
            content: content
        })
        console.log("Here after i call the api")
        console.log(data);
        return data;
    } catch (error) {
        handleError(error);
    }
}

export const commentGetAPI = async (symbol: string) => {
    try {
        console.log("Here before i call the api")
        const data = await axios.get<CommentGet[]>(api + `?Symbol=${symbol.toLowerCase()}`)
        console.log("Here after i call the api")
        console.log(data);
        return data;
    } catch (error) {
        handleError(error);
    }
}