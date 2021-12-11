import * as express from 'express';
import * as http from 'http';
import * as swaggerUi from 'swagger-ui-express';
import UserRouter from './QuotesRouter';

type NextFunction = express.NextFunction;
type Request = express.Request;
type Response = express.Response;

let swaggerDoc: Object;

try {
    swaggerDoc = require('../../quotes-service.yml');
} catch (error) {
    console.log('***************************************************');
    console.log('  Seems like you doesn\'t have swagger.json file');
    console.log('  Please, run: ');
    console.log('  $ swagger-jsdoc -d swaggerDef.js -o swagger.json');
    console.log('***************************************************');
}

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
     * @description
     *  If swagger.json file exists in root folder, shows swagger api description
     *  else send commands, how to get swagger.json file
     * @constructs
     */
    if (swaggerDoc) {
        app.use('/docs', swaggerUi.serve);
        app.get('/docs', swaggerUi.setup(swaggerDoc));
    }

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
