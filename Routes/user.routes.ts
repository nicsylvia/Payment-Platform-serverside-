import express from "express";
import { GetAllUsers, MakeTransfer, RegisterUsers } from "../Controllers/UsersControllers";

const Router = express.Router();

Router.route("/all-users").get(GetAllUsers);
Router.route("/registerusers").post(RegisterUsers);
Router.route("/sendmoney/:userID/:walletID").post(MakeTransfer)

export default Router