import express from "express";

const app = express();
const port: Number = 5050;

import {ConnectionOptions, getConnection, getCustomRepository } from "typeorm";
import PgConnector from "../lib/db/pgConnector";

import { IncomeType } from "../lib/classes/entities/incomeEntity";
import { IncomeTypeRepository } from "../lib/classes/repositories/incomeTypesRepository";

const config: ConnectionOptions = {
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "dev",
	password: "secretdevpassword",
	database: "budget",
	synchronize: false,
	schema: "budget",
	logging: true,
	entities: [
		IncomeType
	]
};

const pgConnector = new PgConnector(config);


//TODO: Сделать обработку ошибок через фабричный метод https://blog.logrocket.com/design-patterns-in-node-js/


// TODO: Вынести этот старт в асинк, чтобы все успевало законнектиться
pgConnector.connect();

app.get("/", async (req, res) => {

	// const repo = new IncomeTypeRepository(getConnection());

	// let incomeTypes = await repo.getAll();

	// console.log(incomeTypes);

	// let incomeTypeSingle = await repo.add(new IncomeType("Премия"));

	// console.log(incomeTypeSingle);

	// incomeTypeSingle = await repo.getById(5);

	// console.log(incomeTypeSingle);

	// incomeTypeSingle = await repo.getByName("Премия");

	// console.log(incomeTypeSingle);

	// incomeTypeSingle = await repo.update(5, new IncomeType("Премия2"));

	// console.log(incomeTypeSingle);

	// incomeTypes = await repo.getAll();

	// console.log(incomeTypes);

	// let affected = await repo.removeById(5);

	// console.log(affected);

	// const incomeType = await repo.add(new IncomeType("Премия"));

	// affected = await repo.removeByName("Премия");

	// console.log(affected);

	// res.sendStatus(200);

	const repo: IncomeTypeRepository = getCustomRepository(IncomeTypeRepository);

	const incomeTypes = await repo.find();

	console.log(incomeTypes);

	res.sendStatus(200);
});

app.listen(port, () => {
	console.log(`server started on ${port}`);
});

// TODO: SOLID
// https://medium.com/@samueleresca/inversion-of-control-and-dependency-injection-in-typescript-3040d568aabe
// TODO: implement IoC container http://inversify.io/
