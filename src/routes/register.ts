
const express = require('express');
const router = express.Router();
import * as registerController from "../controllers/registerController"

router.post('/', registerController.handleNewUser);

export {router as RegisterRoute };