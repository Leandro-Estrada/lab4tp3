import Sequelize from 'sequelize';
import database from '../db';

const Producto = database.define('productos', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	codigo: {
		type: Sequelize.STRING(25),
	},
	descripcion: {
		type: Sequelize.STRING(250),
	},
	pu: {
		type: Sequelize.DOUBLE,
	},
	iva: {
		type: Sequelize.DOUBLE,
	},
});

export default Producto;
