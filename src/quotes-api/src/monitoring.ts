import { NextFunction, Request, Response } from 'express';
import { MeterProvider, ConsoleMetricExporter } from '@opentelemetry/metrics';

const meter = new MeterProvider({
  exporter: new ConsoleMetricExporter(),
  interval: 2000,
}).getMeter('quotes-api-meter');

const requestCount = meter.createCounter("requests", {
  description: "Count all incoming requests"
});

const boundInstruments = new Map();

export const countAllRequests = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!boundInstruments.has(req.path)) {
      const labels = { route: req.path };
      const boundCounter = requestCount.bind(labels);
      boundInstruments.set(req.path, boundCounter);
    }

    boundInstruments.get(req.path).add(1);
    next();
  };
};
