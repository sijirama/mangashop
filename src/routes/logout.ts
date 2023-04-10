const express = require('express');
const router = express.Router();
//import * as registerController from "../controllers/registerController"
import * as loginController from "../controllers/loginController"
import * as logoutController from "../controllers/logoutCOntroller"

router.get('/', logoutController.handleLogout);

export {router as LogoutRoute };