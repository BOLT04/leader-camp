import { NextFunction, Request, Response } from 'express';

interface RequestWithUser extends Request {
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function signup(req: Request, res: Response, next: NextFunction): Promise<void> {
    throw new Error("Not available")
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function login(req: Request, res: Response, next: NextFunction): Promise<void> {
    throw new Error("Not available")
}

/**
 * @export
 * @param {RequestWithUser} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function user(req: RequestWithUser, res: Response, next: NextFunction): Promise<void> {
    throw new Error("Not available");
}
