import { HttpError } from '@/config/error';
import { NextFunction, Request, Response } from 'express';
import api from '@opentelemetry/api';
import Logger from '@/utils/Logger';

import trace from '../../tracer';
const tracer = trace('quotes-api-server')

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

        const currentSpan = api.trace.getSpan(api.context.active());
        currentSpan && Logger.info(`traceId:${currentSpan.spanContext().traceId} Quotes.findOne request.`)
        const span = tracer.startSpan('Quotes.findOne', {
            kind: 1, // server
            attributes: { key: 'value' },
        });
        // Annotate our span to capture metadata about the operation
        span.addEvent('invoking Quotes.findOne');

        res.status(200).json(quote);
        span.end();
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}
