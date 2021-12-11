import { NextFunction, Request, Response } from 'express';
import api from '@opentelemetry/api';

const tracer = require('./tracer')('quotes-api-traceMiddleware');

interface RequestWithUser extends Request {
  user: object | string;
}

export function traceRequests(_: RequestWithUser, __: Response, next: NextFunction): void {
  const span = tracer.startSpan('request');
  api.trace.setSpan(api.context.active(), span);

  next();
  span.end();
}
