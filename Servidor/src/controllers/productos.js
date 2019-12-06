import HttpStatus from 'http-status-codes';
import Op from 'sequelize/lib/operators';
import Producto from '../models/Producto';

export async function getProductos(req, res) {
	try {
		var codigo = (req.query.codigo || '').trim();
		var descripcion = (req.query.descripcion || '').trim();
	} catch (err) {
		console.error(err);
	}

	try {
		let _and = [];
		let where = {
			[Op.and]: _and,
		};
		if (codigo) {
			_and.push({
				codigo: {
					[Op.iLike]: `%${codigo}%`,
				},
			});
		}
		if (descripcion) {
			_and.push({
				descripcion: {
					[Op.iLike]: `%${descripcion}%`,
				},
			});
		}

		let lista = await Producto.findAll({ where });
		res.json(lista);
	} catch (err) {
		console.error('Error al consultar los productos', err);
		res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err.message || 'Error interno');
	}
}

export async function getProductoById(req, res)  {
	try {
		let prod = await Producto.findByPk(req.params.id);
		if (!prod) {
			return res.status(HttpStatus.NOT_FOUND).send('Producto no encontrado');
		}

		res.json(prod);
	} catch (err) {
		res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err.message || 'Error interno');
		console.error('Error al consultar el producto ID ' + req.params.id, err);
	}
}

export async function postProducto(req, res) {
	let body = req.body;

	try {
		let nuevo = await Producto.create({
			codigo: body.codigo,
			descripcion: body.descripcion,
			pu: body.pu,
			iva: body.iva,
		});

		res.status(HttpStatus.CREATED).json(nuevo);
	} catch (err) {
		console.error('Error al guardar el producto');
		console.error(err);
		res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err.message || 'Error interno');
	}
}


export async function putProducto(req, res) {
	let reqBody = req.body;
	let id = req.params.id;

	try {
		let [cantidad, actualizados] = await Producto.update(reqBody, {
			where: { id },
			returning: true,
		});

		if (cantidad === 0) {
			return res.status(HttpStatus.NOT_FOUND).send('Producto no encontrado');
		}

		res.json(actualizados[0]);
	} catch (err) {
		console.error('Error al actualizar el producto');
		console.error(err);
		res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('Error interno');
	}
}

export async function eliminarProducto(req, res) {
	try {
		let id = req.params.id;
		await Producto.destroy({
			where: { id },
		});

		res.status(HttpStatus.NO_CONTENT).send('Producto eliminado');
	} catch (err) {
		console.error('Error al eliminar el producto');
		console.error(err);
		res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err.message || 'Error interno');
	}
}
