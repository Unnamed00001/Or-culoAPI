import mongoose from "mongoose";

export interface LettersModel {
    id: number;
    nome: string;
    significadoGeral: string;
    palavrasChave: string[];
    categoria: string [];
    mensagemReversa: string;
}

const LettersSchema = new mongoose.Schema({

    id: { type: Number, required: true },
    nome: { type: String, required: true },
    significadoGeral: { type: String, required: true },
    palavrasChave: { type: [String], default: [] },
    categoria: { type: [String], default: [] },
    mensagemReversa: { type: String, default: "" }

})

export const LettersDB = mongoose.model<LettersModel & mongoose.Document>("Letter",LettersSchema)