import dotenv from "dotenv";

dotenv.config();

export const environmentVariables = {
    PORT: process.env.port as string,

    DB_STRING: process.env.mongoDB_String as string
}