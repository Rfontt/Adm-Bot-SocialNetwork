import { Router } from "express";
import TwitterAutomationController from "../controllers/TwitterAutomationController";

const route = Router();

route.post('/twitter/automation', TwitterAutomationController.makePost);

export default route;