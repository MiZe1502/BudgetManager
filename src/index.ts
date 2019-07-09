import express from "express";

const app = express();
const port: Number = 5050;

import {ConnectionOptions, getConnection, getCustomRepository } from "typeorm";
import PgConnector from "../lib/db/pgConnector";

import { IncomeEntity, IncomeType } from "../lib/classes/entities/incomeEntity";
import { ShopEntity } from "../lib/classes/entities/shopEntity";
import { IncomeRepository } from "../lib/classes/repositories/incomeRepository";
import { IncomeTypeRepository } from "../lib/classes/repositories/incomeTypesRepository";

import { UserEntity } from "../lib/classes/entities/userEntity";
import { IRepository, RepositoryFactory, repositoryType } from "../lib/classes/repositories/repositoryFactory";
import { ShopRepository } from "../lib/classes/repositories/shopRepository";

// TODO: Вынести данные в .env файл и использовать dotenv
const config: ConnectionOptions = {
	type: "postgres",
	host: "localhost",
	port: 5051,
	username: "dev",
	password: "secretdevpassword",
	database: "budget",
	synchronize: false,
	schema: "budget",
	logging: true,
	entities: [
		IncomeType,
		IncomeEntity,
		ShopEntity,
		UserEntity
	]
};

const pgConnector = new PgConnector(config);

// TODO: Сделать обработку ошибок через фабричный метод https://blog.logrocket.com/design-patterns-in-node-js/

// TODO: аутентификация через passport.js https://medium.com/devschacht/node-hero-chapter-8-27b74c33a5ce https://code.tutsplus.com/ru/tutorials/site-authentication-in-nodejs-user-sign-up--cms-29933

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

// 	const repo: IncomeRepository = getCustomRepository(IncomeRepository);

// 	const repo2: IncomeTypeRepository = getCustomRepository(IncomeTypeRepository);

// 	const income = await repo.find({ relations: ["type"] });

// 	const incomeType = await repo2.findByName("Премия");

// // 	const resp = await repo.save(new IncomeEntity("тестовая премия", incomeType, 20000));

// 	const incomes = await repo.findByTypeName("Премия");
// 	console.log(incomes);

	const repo: IRepository = RepositoryFactory.createRepository(repositoryType.IncomeRepository);

	const resp = await (repo as IncomeRepository).find({relations: ["type", "user"]});

	console.log(resp);

	res.sendStatus(200);
});

app.listen(port, () => {
	console.log(`server started on ${port}`);
});

// TODO: SOLID
// https://medium.com/@samueleresca/inversion-of-control-and-dependency-injection-in-typescript-3040d568aabe
// TODO: implement IoC container http://inversify.io/
