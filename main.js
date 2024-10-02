"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Keypair } from "@solana/web3.js";
require("dotenv/config");
var helpers_1 = require("@solana-developers/helpers");
// const keypair = Keypair.generate();
var keypair = (0, helpers_1.getKeypairFromEnvironment)("SECRET_KEY");
console.log("public key: ", keypair.publicKey.toBase58());
console.log("private key: ", keypair.secretKey);
