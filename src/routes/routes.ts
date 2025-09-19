import { Router } from "express"; // Importa o Router do Express
import { getLettres, getLettresById, getLettresByCategory, postCreateLetter, putUpdateLetter, deleteLetter } from "../controllers/lettresControlles"; // Importa os controllers

export const router = Router(); // Cria uma instância do Router do Express


router.get("/letters", getLettres)

router.post("/letters", postCreateLetter)

router.get("/letters/:id", getLettresById)

router.put("/letters/:id",putUpdateLetter)

router.get("/letters/categoria/:category", getLettresByCategory)

router.delete("/letters/:id", deleteLetter)