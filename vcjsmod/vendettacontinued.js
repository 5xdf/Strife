"use strict";
(() => {
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
  var import_native = require("@lib/native");
  console.log("Loading Vendetta Continued....");
  Object.freeze = Object;
  Object.seal = Object;
  const origToString = Function.prototype.toString;
  Object.defineProperty(Function.prototype, "toString", {
    value: origToString,
    configurable: true,
    writable: false
  });
  import(".").then(function(m) {
    return m.default();
  }).catch(function(e) {
    console.log(e?.stack ?? e.toString());
    alert([
      "Failed to inject Vendetta Continued!\n",
      `Build Number: ${import_native.ClientInfoManager.Build}`,
      `Vendetta Continued: ${"e746435"}`,
      e?.stack || e.toString()
    ].join("\n"));
  });
})();
//# sourceURL=Bound
