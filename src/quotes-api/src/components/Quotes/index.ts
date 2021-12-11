import { HttpError } from '@/config/error';
import { NextFunction, Request, Response } from 'express';

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const quote = {
            "origin" : "https://twitter.com/simonsinek/status/1459168870795776001",
            "id" : "c87658b5-e8ea-446b-978c-a40054590b2f",
            "authorId" : "c87658b5-e8ea-446b-978c-a40054590b2b",
            "content" : "People don't buy what you do; they buy why you do it"
        }

        res.status(200).json(quote);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}
