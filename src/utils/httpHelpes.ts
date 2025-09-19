import { HttpResponse } from "../models/httpResponseModel";

export const OK = async (letters: any): Promise<HttpResponse> =>{
    return{
        statusCode: 200,
        body: letters
    }
    
}
export const noContent = async (): Promise<HttpResponse> =>{
    return{
        statusCode: 204,
        body: null,
    };
};

export const badRequest = async (): Promise<HttpResponse> =>{
    return{
        statusCode: 400,
        body: null,
    };
};

export const Created = async (data: any): Promise<HttpResponse> => {
    return {
        statusCode: 201,
        body: data
    };
};

export const notFound = async (): Promise<HttpResponse> => {
    return {
        statusCode: 404,
        body: { message: "Not Found" }
    };
};

