import express from "express";

const port: Number = 5050;

import { ApolloServer } from "apollo-server-express";
import compression from "compression";
import cors from "cors";
import depthLimit from "graphql-depth-limit";
import { createServer } from "http";

import {ConnectionOptions, getConnection, getCustomRepository } from "typeorm";
import PgConnector from "../lib/db/pgConnector";

import { IncomeEntity, IncomeType } from "../lib/classes/entities/incomeEntity";
import { ShopEntity } from "../lib/classes/entities/shopEntity";
import { IncomeRepository } from "../lib/classes/repositories/incomeRepository";
import { IncomeTypeRepository } from "../lib/classes/repositories/incomeTypesRepository";

import { UserEntity } from "../lib/classes/entities/userEntity";
import { IRepository, RepositoryFactory, repositoryType } from "../lib/classes/repositories/repositoryFactory";
import { ShopRepository } from "../lib/classes/repositories/shopRepository";

import { GraphQLSchema } from "graphql";
import { buildSchema } from "type-graphql";
import { IncomeResolver } from "../lib/classes/resolvers/incomeResolver";
import { IncomeTypeResolver } from "../lib/classes/resolvers/incomeTypeResolver";

async function bootstrap() {
	const schema: GraphQLSchema = await buildSchema({
		resolvers: [IncomeTypeResolver, IncomeResolver]
	});

	const server: ApolloServer = new ApolloServer({
		validationRules: [depthLimit(7)],
		schema,
		playground: true
	});

	const app = express();

	app.use("*", cors());
	app.use(compression());
	server.applyMiddleware({app, path: "/graphql"});

	const httpServer = createServer(app);

	httpServer.listen(port, () => {
		console.log(`server started on ${port}`);
	});

}

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

// TODO: SOLID
// https://medium.com/@samueleresca/inversion-of-control-and-dependency-injection-in-typescript-3040d568aabe

// TODO: implement IoC container http://inversify.io/

// TODO: Вынести этот старт в асинк, чтобы все успевало законнектиться
pgConnector.connect();

bootstrap();

// app.get("/", async (req, res) => {

// 	const repo: IRepository = RepositoryFactory.createRepository(repositoryType.IncomeRepository);

// 	const resp = await (repo as IncomeRepository).find({relations: ["type", "user"]});

// 	console.log(resp);

// 	res.sendStatus(200);
// });

// app.listen(port, () => {
// 	console.log(`server started on ${port}`);
// });
