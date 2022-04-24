import { Request, Response } from 'express';
import TwitterAutomationDatas from '../interfaces/TwitterAutomationDatas';
import TwitterAutomationService from '../services/TwitterAutomationService';

export default class TwitterAutomationController {
  static async makePost(req: Request, res: Response) {
    const {
      userName,
      password,
      text
    }: TwitterAutomationDatas = req.body;

    if (!userName || !password || !text) {
      return res.status(400).send({ message: 'Bad request because you did not pass arguments in the body.' });
    }

    const result = await TwitterAutomationService.makePost(userName, password, text);

    return res.status(result.status).send({ message: result.message });
  }
}
