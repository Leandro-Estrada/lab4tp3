import { Router } from 'express';

import {
	getClientes,
	getClienteById,
	postCliente,
	putCliente,
	eliminarCliente,
} from '../controllers/clientes';

const clienteRouter = new Router();


clienteRouter.get('/', getClientes);
clienteRouter.get('/:id', getClienteById);
clienteRouter.post('/', postCliente);
clienteRouter.put('/:id', putCliente);
clienteRouter.delete('/:id', eliminarCliente);


export default clienteRouter;
