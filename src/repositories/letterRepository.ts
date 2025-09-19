
import { LettersDB, LettersModel } from "../models/lettersModel"; // Importa a interface da carta

// Retorna todas as cartas do MongoDB
export const findAllLetters = async (): Promise<LettersModel[]> =>{
    return await LettersDB.find()
}

// Busca uma carta pelo ID
export const findLettersById = async (id: number): Promise<LettersModel | null> =>{
    return await LettersDB.findOne({id}) 
}

// Busca cartas por categoria
export const findLettersByCategory = async (category: string): Promise<LettersModel[]> =>{
    return LettersDB.find({categoria: {$in:[category]}})
}

// Criar uma nova carta
export const createLetter = async(LetterData: LettersModel): Promise<LettersModel> => {
    const newLetter = new LettersDB(LetterData)
    await newLetter.save()
    return newLetter
}

// Atualizar uma carta
export const updateLetter = async (id: number, updateData: Partial<LettersModel>): Promise<LettersModel | null> => {
    return await LettersDB.findOneAndUpdate({ id }, updateData, { new: true });
}

// Deletar uma carta
export const deleteLetter = async (id: number): Promise<LettersModel | null> => {
    return await LettersDB.findOneAndDelete({ id });
}
