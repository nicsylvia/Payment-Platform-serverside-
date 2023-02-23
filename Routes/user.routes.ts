import express from "express";
import { MakeTransfer, RegisterUsers } from "../Controllers/UsersControllers";

const Router = express.Router();

Router.route("/registerusers").post(RegisterUsers);
Router.route("/sendmoney/:userID/:walletID").post(MakeTransfer)

export default Router