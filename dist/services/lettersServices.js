"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
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

// src/services/lettersServices.ts
var lettersServices_exports = {};
__export(lettersServices_exports, {
  createLetterService: () => createLetterService,
  deleteLetterService: () => deleteLetterService,
  getLetterByIdService: () => getLetterByIdService,
  getLettersCategoryService: () => getLettersCategoryService,
  getLettersService: () => getLettersService,
  updateLetterService: () => updateLetterService
});
module.exports = __toCommonJS(lettersServices_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createLetterService,
  deleteLetterService,
  getLetterByIdService,
  getLettersCategoryService,
  getLettersService,
  updateLetterService
});
