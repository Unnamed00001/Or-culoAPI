"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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

// src/utils/httpHelpes.ts
var httpHelpes_exports = {};
__export(httpHelpes_exports, {
  Created: () => Created,
  OK: () => OK,
  badRequest: () => badRequest,
  noContent: () => noContent,
  notFound: () => notFound
});
module.exports = __toCommonJS(httpHelpes_exports);
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
var badRequest = () => __async(null, null, function* () {
  return {
    statusCode: 400,
    body: null
  };
});
var Created = (data) => __async(null, null, function* () {
  return {
    statusCode: 201,
    body: data
  };
});
var notFound = () => __async(null, null, function* () {
  return {
    statusCode: 404,
    body: { message: "Not Found" }
  };
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Created,
  OK,
  badRequest,
  noContent,
  notFound
});
