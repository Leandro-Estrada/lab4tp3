import HttpStatus from 'http-status-codes';
import Cliente from '../models/Cliente';

export async function getClientes(req, res) {
	try {
		let lisCli = await Cliente.findAll();
		res.json(lisCli);
	} catch (err) {
		console.error('Error al buscar los clientes', err);
		res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err.message || 'Error interno');
	}
}

export async function getClienteById(req, res) {
	try {
		let cli = await Cliente.findByPk(req.params.id);
		if (!cli) {
			return res.status(HttpStatus.NOT_FOUND).send('Cliente no encontrado');
		}

		res.json(cli);
	} catch (err) {
		res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err.message || 'Error interno');
		console.error('Error al buscar el cliente ID ' + req.params.id, err);
	}
}

export async function postCliente(req, res) {
	let reqBody = req.body;

	try {
		let nuevoCli = await Cliente.create({
			nombre: reqBody.nombre,
			cuit: reqBody.cuit,
			direccion: reqBody.direccion,
		});

		res.status(HttpStatus.CREATED).json(nuevoCli);
	} catch (err) {
		console.error('Error al guardar el cliente');
		console.error(err);
		res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err.message || 'Error interno');
	}
}

export async function putCliente(req, res) {

	let reqBody = req.body;
	let id = req.params.id;

	try {
		let [contador, actualizados] = await Cliente.update(reqBody, {
			where: { id },
			returning: true,
		});

		if (contador === 0) {
			return res.status(HttpStatus.NOT_FOUND).send('Cliente no encontrado');
		}

		res.json(actualizados[0]);
	} catch (err) {
		console.error('Error al actualizar el cliente');
		console.error(err);
		res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('Error interno');
	}
}

export async function eliminarCliente(req, res) {
	try {
		let id = req.params.id;
		await Cliente.destroy({
			where: { id },
		});

		res.status(HttpStatus.NO_CONTENT).send('Cliente eliminado');
	} catch (err) {
		console.error('Error al eliminar el cliente');
		console.error(err);
		res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err.message || 'Error interno');
	}
}
