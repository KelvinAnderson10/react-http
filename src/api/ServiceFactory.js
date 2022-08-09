import { jsonPlaceHolderService } from "../services/JsonPlaceHolderService"

export const ServiceFactory = (apiClient) => {
    return{
        jsonPlaceHolderService: jsonPlaceHolderService(apiClient)
    }
}