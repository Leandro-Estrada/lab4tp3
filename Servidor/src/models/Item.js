import Sequelize from 'sequelize';
import database from '../db';

const Item = database.define('items', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	cantidad: {
		type: Sequelize.FLOAT,
		allowNull: false,
	},
	codigo: {
		type: Sequelize.STRING(25),
		allowNull: false,
	},
	descripcion: {
		type: Sequelize.STRING(250),
		allowNull: false,
	},
	pu: {
		type: Sequelize.DOUBLE,
		allowNull: false,
	},
	iva: {
		type: Sequelize.DOUBLE,
		allowNull: false,
	},

	productoId: {
		type: Sequelize.INTEGER,
	},
});


export default Item;
