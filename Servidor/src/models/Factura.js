import Sequelize from 'sequelize';
import database from '../db';
import Item from './Item';
import Cliente from './Cliente';

const Factura = database.define('facturas', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	tipo: {
		type: Sequelize.CHAR,
		allowNull: false,
	},
	ptoVenta: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
	numero: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
	fecha: {
		type: Sequelize.DATE,
		allowNull: false,
	},
	total: {
		type: Sequelize.FLOAT,
		allowNull: false,
	},
});

Factura.hasMany(Item, {
	foreignKey: 'facturaId',
});

Cliente.hasMany(Factura, {
	foreignKey: 'clienteId',
});
Factura.belongsTo(Cliente, {
	as: 'cliente',
	foreignKey: 'clienteId',
});


export default Factura;
