import { Router } from 'express';

import {
	getFacturas,
	getFacturaById,
	postFactura,
} from '../controllers/facturas';

const facturaRouter = new Router();

facturaRouter.get('/', getFacturas);
facturaRouter.get('/:id', getFacturaById);
facturaRouter.post('/', postFactura);


export default facturaRouter;
