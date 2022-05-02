import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";

class BloggersService{
    async getBlogger(id){
        const res = await api.get('api/bloggers/' +id)
        logger.log(res.data)
        
    }
}

export const bloggerService = new BloggerService()