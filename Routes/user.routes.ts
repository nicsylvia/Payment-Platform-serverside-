import express from "express";
import { RegisterUsers } from "../Controllers/users.controllers";

const Router = express.Router();

Router.route("/registerusers").post(RegisterUsers);

export default Router