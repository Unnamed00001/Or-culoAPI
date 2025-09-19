"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/app.ts
var import_express2 = __toESM(require("express"));

// src/routes/routes.ts
var import_express = require("express");

// src/models/lettersModel.ts
var import_mongoose = __toESM(require("mongoose"));
var LettersSchema = new import_mongoose.default.Schema({
  id: { type: Number, required: true },
  nome: { type: String, required: true },
  significadoGeral: { type: String, required: true },
  palavrasChave: { type: [String], default: [] },
  categoria: { type: [String], default: [] },
  mensagemReversa: { type: String, default: "" }
});
var LettersDB = import_mongoose.default.model("Letter", LettersSchema);

// src/repositories/letterRepository.ts
var findAllLetters = () => __async(null, null, function* () {
  return yield LettersDB.find();
});
var findLettersById = (id) => __async(null, null, function* () {
  return yield LettersDB.findOne({ id });
});
var findLettersByCategory = (category) => __async(null, null, function* () {
  return LettersDB.find({ categoria: { $in: [category] } });
});
var createLetter = (LetterData) => __async(null, null, function* () {
  const newLetter = new LettersDB(LetterData);
  yield newLetter.save();
  return newLetter;
});
var updateLetter = (id, updateData) => __async(null, null, function* () {
  return yield LettersDB.findOneAndUpdate({ id }, updateData, { new: true });
});
var deleteLetter = (id) => __async(null, null, function* () {
  return yield LettersDB.findOneAndDelete({ id });
});

// src/utils/httpHelpes.ts
var OK = (letters) => __async(null, null, function* () {
  return {
    statusCode: 200,
    body: letters
  };
});
var noContent = () => __async(null, null, function* () {
  return {
    statusCode: 204,
    body: null
  };
});
var Created = (data) => __async(null, null, function* () {
  return {
    statusCode: 201,
    body: data
  };
});

// src/services/lettersServices.ts
var getLettersService = () => __async(null, null, function* () {
  const lettersData = yield findAllLetters();
  let response = null;
  if (lettersData) {
    response = yield OK(lettersData);
  } else {
    response = yield noContent();
  }
  return response;
});
var getLetterByIdService = (id) => __async(null, null, function* () {
  const lettersData = yield findLettersById(id);
  let response = null;
  if (lettersData) {
    response = yield OK(lettersData);
  } else {
    response = yield noContent();
  }
  return response;
});
var getLettersCategoryService = (category) => __async(null, null, function* () {
  const lettersData = yield findLettersByCategory(category);
  let response = null;
  if (lettersData) {
    response = yield OK(lettersData);
  } else {
    response = yield noContent();
  }
  return response;
});
var createLetterService = (letterData) => __async(null, null, function* () {
  const newLetter = yield createLetter(letterData);
  return yield Created(newLetter);
});
var updateLetterService = (id, updateData) => __async(null, null, function* () {
  const updatedLetter = yield updateLetter(id, updateData);
  let response = null;
  if (updatedLetter) {
    response = yield OK(updatedLetter);
  } else {
    response = yield noContent();
  }
  return response;
});
var deleteLetterService = (id) => __async(null, null, function* () {
  const deletedLetter = yield deleteLetter(id);
  let response = null;
  if (deletedLetter) {
    response = yield OK(deletedLetter);
  } else {
    response = yield noContent();
  }
  return response;
});

// src/controllers/lettresControlles.ts
var getLettres = (req, res) => __async(null, null, function* () {
  const httpResponse = yield getLettersService();
  res.status(httpResponse.statusCode).json(httpResponse.body);
});
var getLettresById = (req, res) => __async(null, null, function* () {
  const id = parseInt(req.params.id);
  const httpResponse = yield getLetterByIdService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
});
var getLettresByCategory = (req, res) => __async(null, null, function* () {
  const category = req.params.category;
  const httpResponse = yield getLettersCategoryService(category);
  res.status(httpResponse.statusCode).json(httpResponse.body);
});
var postCreateLetter = (req, res) => __async(null, null, function* () {
  const letterData = req.body;
  const httpResponse = yield createLetterService(letterData);
  res.status(httpResponse.statusCode).json(httpResponse.body);
});
var putUpdateLetter = (req, res) => __async(null, null, function* () {
  const id = parseInt(req.params.id);
  const updateData = req.body;
  const httpResponse = yield updateLetterService(id, updateData);
  res.status(httpResponse.statusCode).json(httpResponse.body);
});
var deleteLetter2 = (req, res) => __async(null, null, function* () {
  const id = parseInt(req.params.id);
  const httpResponse = yield deleteLetterService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
});

// src/routes/routes.ts
var router = (0, import_express.Router)();
router.get("/letters", getLettres);
router.post("/letters", postCreateLetter);
router.get("/letters/:id", getLettresById);
router.put("/letters/:id", putUpdateLetter);
router.get("/letters/categoria/:category", getLettresByCategory);
router.delete("/letters/:id", deleteLetter2);

// src/app.ts
var import_cors = __toESM(require("cors"));

// src/data/letters.ts
var import_mongoose2 = __toESM(require("mongoose"));
var mongoURI = process.env.MONGO_URI || "";
var connectDB = () => __async(null, null, function* () {
  try {
    yield import_mongoose2.default.connect(mongoURI);
    console.log("MongoDB conectado!");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
  }
});

// src/app.ts
var app = (0, import_express2.default)();
function createApp() {
  app.use((0, import_cors.default)());
  app.use(import_express2.default.json());
  app.use("/api", router);
  connectDB();
  return app;
}

// src/server.ts
var app2 = createApp();
var port = process.env.PORT;
app2.listen(port, () => {
  console.log(`\u{1F680} Servidor Or\xE1culoAPI rodando na porta ${port}`);
});
