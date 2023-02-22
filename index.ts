import express, {Application, Request, Response} from "express";
import dotenv from "dotenv"

dotenv.config()

import { environmentVariables } from "./Config/EnvironmentVariables";

const port = environmentVariables.PORT

const app: Application = express();

app.get("/", (req: Request, res: Response) =>{
    return res.status(200).json({
        messgae: "API is ready for consumption"
    })
});

app.listen(port, () =>{
    console.log("Server is up and running on port", port)
})