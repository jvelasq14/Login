import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 4000;
export const SECRETORPRIVATEKEY = process.env.SECRETORPRIVATEKEY || "HOLAMUNDO2023";