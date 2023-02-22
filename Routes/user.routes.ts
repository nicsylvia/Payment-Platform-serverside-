import express from "express";
import { RegisterUsers } from "../Controllers/UsersControllers";

const Router = express.Router();

Router.route("/registerusers").post(RegisterUsers);

export default Router