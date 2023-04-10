const express = require('express');
const router = express.Router();
//import * as registerController from "../controllers/registerController"
import * as loginController from "../controllers/loginController"

router.post('/', loginController.handleLogin);

export {router as LoginRoute };