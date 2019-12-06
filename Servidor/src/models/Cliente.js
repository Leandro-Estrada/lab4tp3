import Sequelize from 'sequelize';
import database from '../db';

const Cliente = database.define('clientes', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	nombre: {
		type: Sequelize.STRING(50),
		allowNull: false,
	},
	direccion: {
		type: Sequelize.STRING(100),
	},
	cuit: {
		type: Sequelize.STRING(15),
		allowNull: false,
		unique: true,
	},
});

export default Cliente;
