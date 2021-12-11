import * as express from 'express';
import * as http from 'http';
import UserRouter from './QuotesRouter';

type NextFunction = express.NextFunction;
type Request = express.Request;
type Response = express.Response;

/**
 * @export
 * @param {express.Application} app
 */
export function init(app: express.Application): void {
    const router: express.Router = express.Router();

    /**
     * @description
     *  Forwards any requests to the /v1/quotes URI to our UserRouter
     *  Also, check if user authenticated
     * @constructs
     */
    app.use('/v1/quotes', UserRouter);

    /**
     * @description No results returned mean the object is not found
     * @constructs
     */
    app.use((req: Request, res: Response, next: NextFunction) => {
        res.status(404).send(http.STATUS_CODES[404]);
    });

    /**
     * @constructs all routes
     */
    app.use(router);
}
