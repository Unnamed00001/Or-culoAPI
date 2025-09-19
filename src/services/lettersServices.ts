import { findAllLetters, findLettersByCategory, findLettersById, createLetter, updateLetter, deleteLetter } from "../repositories/letterRepository"; // Importa funções do repository
import * as http from "../utils/httpHelpes" // Importa helpers para construir respostas HTTP

// Serviço que retorna todas as cartas
export const getLettersService = async () =>{
    // Chama o repository para buscar todas as cartas
    const lettersData = await findAllLetters();
    let response = null;

    // Se houver cartas, retorna HTTP 200 com os dados
    if (lettersData) {
        response = await http.OK(lettersData);
    } else{
        // Se não houver cartas, retorna HTTP 204 (no content)
        response = await http.noContent();
    }
    // Retorna o objeto com status e body
    return response;
};

// Serviço que retorna uma carta específica pelo ID
export const getLetterByIdService = async (id: number) => {
    // Chama o repository para buscar a carta pelo ID
    const lettersData = await findLettersById(id)
    let response = null;

    // Se encontrar a carta, retorna HTTP 200 com os dados
    if (lettersData){
        response = await http.OK(lettersData);
    } else{
        // Se não encontrar, retorna HTTP 204 (no content)
        response = await http.noContent();
    }
    // Retorna o objeto com status e body
    return response;

};

export const getLettersCategoryService = async (category: string) => {

    const lettersData = await findLettersByCategory(category);
    let response = null

    // Se encontrar a carta, retorna HTTP 200 com os dados
    if (lettersData){
        response = await http.OK(lettersData);
    } else{
        // Se não encontrar, retorna HTTP 204 (no content)
        response = await http.noContent();
    }
    // Retorna o objeto com status e body
    return response;

}
// Criar nova carta
export const createLetterService = async (letterData: any) =>{
    const newLetter = await createLetter(letterData)
    return await http.Created(newLetter)
}
// Atualizar carta
export const updateLetterService = async (id: number, updateData: any) => {
    const updatedLetter = await updateLetter(id, updateData);
    let response = null

    // Se encontrar a carta, retorna HTTP 200 com os dados
    if (updatedLetter){
        response = await http.OK(updatedLetter);
    } else{
        // Se não encontrar, retorna HTTP 204 (no content)
        response = await http.noContent();
    }
    // Retorna o objeto com status e body
    return response;
};

// Deletar carta
export const deleteLetterService = async (id: number) => {
    const deletedLetter = await deleteLetter(id);
    let response = null
    
    // Se encontrar a carta, retorna HTTP 200 com os dados
    if (deletedLetter){
        response = await http.OK(deletedLetter);
    } else{
        // Se não encontrar, retorna HTTP 204 (no content)
        response = await http.noContent();
    }
    // Retorna o objeto com status e body
    return response;
};

    
