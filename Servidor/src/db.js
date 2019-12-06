import Sequelize from 'sequelize';
import CONFIG from '../config';

const Database = CONFIG.db.nombre_db;
const USUARIO = CONFIG.db.usuario;
const PASS = CONFIG.db.password;

const dbConfig = {
	database: Database,
	username: USUARIO,
	password: PASS,
	dialect: 'postgres',
	host: 'localhost',
};

const database = new Sequelize(dbConfig);

export default database;