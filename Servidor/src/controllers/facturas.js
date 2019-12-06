import HttpStatus from 'http-status-codes';
import { Op } from 'sequelize';
import Factura from '../models/Factura';
import DB from '../db';
import Item from '../models/Item';

export async function getFacturas(req, res) {
	try {
		let lista = await Factura.findAll({
			include: ['cliente', 'items'],
		});

		res.json(lista);
	} catch (err) {
		console.error('Error al consultar las facturas', err);
		res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err.message || 'Error interno');
	}
}

export async function getFacturaById(req, res) {
	try {
		let fact = await Factura.findByPk(req.params.id, {
			include: ['cliente', 'items'],
		});
		if (!fact) {
			return res.status(HttpStatus.NOT_FOUND).send('Factura no encontrada');
		}

		res.json(fact);
	} catch (err) {
		res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err.message || 'Error interno');
		console.error('Error al consultar la factura ID ' + req.params.id, err);
	}
}

export async function postFactura(req, res) {
	let body = req.body;

	let existe = await Factura.findOne({
		where: {
			[Op.and]: [
				{
					tipo: body.tipo,
				},
				{
					ptoVenta: body.ptoVenta,
				},
				{
					numero: body.numero,
				},
			],
		},
	});

	if (existe) {
		console.error('Ya existe una factura con este numero');
		return res.status(HttpStatus.CONFLICT).send('Ya existe una factura con estos valores');
	}

	let transaction = await DB.transaction();

	try {
		body.total = (body.items || []).reduce((total, item) => {
			return total + item.cantidad * item.pu * (100 + item.iva) / 100;
		}, 0);

		let nueva = await Factura.create(body, { transaction });

		body.items.forEach(i => i.factura_id = nueva.get('id'));

		let items = await Item.bulkCreate(body.items, { transaction });

		await transaction.commit();

		res.status(HttpStatus.CREATED).json(nueva);
	} catch (err) {
		transaction.rollback().catch(err => {
			console.error('Error');
			console.error(err);
		});

		console.error('Error al guardar factura');
		console.error(err);
		res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err.message || 'Error interno');
	}
}
