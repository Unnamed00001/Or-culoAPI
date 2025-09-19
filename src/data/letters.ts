import mongoose from "mongoose"
const mongoURI = process.env.MONGO_URI || ""

export const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI)
        console.log("MongoDB conectado!")

    } catch (error) {
        console.error("Erro ao conectar ao MongoDB:", error)
    }
}



/*
export const Letters: LettersModel[] = [
    {
        "id": 1,
        "nome": "O Cavaleiro",
        "significadoGeral": "Representa novidades, mensagens e movimento.",
        "palavrasChave": ["mensagem", "ação", "novidade"],
        "categoria": ["notícias", "mudança"],
        "mensagemReversa": "Atrasos, obstáculos e falsas promessas."
    },
    {
        "id": 2,
        "nome": "O Trevo",
        "significadoGeral": "Sorte temporária e oportunidades rápidas.",
        "palavrasChave": ["sorte", "oportunidade", "azar"],
        "categoria": ["acaso", "destino"],
        "mensagemReversa": "Azar passageiro ou oportunidades perdidas."
    },
    {
        "id": 3,
        "nome": "O Navio",
        "significadoGeral": "Viagens, mudanças e novas perspectivas.",
        "palavrasChave": ["viagem", "mudança", "exploração"],
        "categoria": ["movimento", "transição"],
        "mensagemReversa": "Estagnação, bloqueios ou viagens adiadas."
    },
    {
        "id": 4,
        "nome": "A Casa",
        "significadoGeral": "Segurança, família e estabilidade.",
        "palavrasChave": ["lar", "segurança", "família"],
        "categoria": ["conforto", "tradição"],
        "mensagemReversa": "Instabilidade doméstica, insegurança ou conflitos familiares."
    },
    {
        "id": 5,
        "nome": "A Árvore",
        "significadoGeral": "Saúde, crescimento e espiritualidade.",
        "palavrasChave": ["saúde", "crescimento", "raiz"],
        "categoria": ["espiritualidade", "vida"],
        "mensagemReversa": "Problemas de saúde, estagnação ou falta de propósito."
    }
]*/