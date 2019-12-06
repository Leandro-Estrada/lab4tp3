import { Router } from 'express';

import {
	getProductos,
	getProductoById,
	postProducto,
	putProducto,
	eliminarProducto,
} from '../controllers/productos';

const productRouter = new Router();

productRouter.get('/', getProductos);
productRouter.get('/:id', getProductoById);
productRouter.post('/', postProducto);
productRouter.put('/:id', putProducto);
productRouter.delete('/:id', eliminarProducto);


export default productRouter;
