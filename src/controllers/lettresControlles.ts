import { Response, Request } from "express" // Importa os tipos Request e Response do Express
import {getLettersService, getLetterByIdService, getLettersCategoryService, createLetterService, updateLetterService, deleteLetterService} from "../services/lettersServices" // Importa as funções do service

// Controller para listar todas as cartas
export const getLettres = async (req: Request, res: Response) => {

    // Chama o service que retorna todas as cartas
    const httpResponse = await getLettersService()

    // Envia a resposta HTTP com status e corpo retornados pelo service
    res.status(httpResponse.statusCode).json(httpResponse.body)
};

// Controller para buscar uma carta pelo ID
export const getLettresById = async (req: Request, res: Response) => {

    // Pega o ID da carta a partir dos parâmetros da rota e converte para número
    const id = parseInt(req.params.id);

     // Chama o service que retorna a carta específica pelo ID
    const httpResponse = await getLetterByIdService(id);

    // Envia a resposta HTTP com status e corpo retornados pelo service
    res.status(httpResponse.statusCode).json(httpResponse.body);
};
// Controller para buscar cartas pela categoria
export const getLettresByCategory = async (req: Request, res: Response) => {
    
    const category = req.params.category
    const httpResponse = await getLettersCategoryService(category);

    res.status(httpResponse.statusCode).json(httpResponse.body);

};

export const postCreateLetter = async (req: Request, res: Response) => {
    const letterData = req.body;
    const httpResponse = await createLetterService(letterData);
    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const putUpdateLetter = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const updateData = req.body;
    const httpResponse = await updateLetterService(id, updateData);
    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const deleteLetter = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await deleteLetterService(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
};