import { Router } from 'express';
import { QuotesComponent } from '@/components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

router.get('/:id', QuotesComponent.findOne);

/**
 * @export {express.Router}
 */
export default router;
