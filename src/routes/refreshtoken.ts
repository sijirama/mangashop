const express = require('express');
const router = express.Router();
import * as refreshController from "../controllers/refreshTokenController"

router.get('/', refreshController.refreshToken);

export {router as RefreshTokenRoute };