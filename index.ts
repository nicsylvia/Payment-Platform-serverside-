import express, {Application, Request, Response} from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config()

import { environmentVariables } from "./Config/EnvironmentVariables";
import { DBconnect } from "./Config/DB";

const port = environmentVariables.PORT

const app: Application = express();
DBconnect();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) =>{
    return res.status(200).json({
        messgae: "API is ready for consumption"
    })
});

app.listen(port, () =>{
    console.log("")
    console.log("Server is up and running on port", port)
})