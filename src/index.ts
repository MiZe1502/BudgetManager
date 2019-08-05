import express from "express";

import { config } from "dotenv";
const result = config();

if (result.error) {
  throw result.error;
}

const port: number = Number(process.env.APP_PORT);

import { ApolloServer } from "apollo-server-express";
import compression from "compression";
import cors from "cors";
import depthLimit from "graphql-depth-limit";
import { createServer } from "http";

import {ConnectionOptions, getConnection, getCustomRepository } from "typeorm";
import PgConnector from "../lib/db/pgConnector";

import { GoodsCategoryEntity } from "../lib/classes/entities/goodsCategoryEntity";
import { GoodsEntity } from "../lib/classes/entities/goodsEntity";
import { IncomeEntity } from "../lib/classes/entities/incomeEntity";
import { IncomeType } from "../lib/classes/entities/incomeTypeEntity";
import { ShopEntity } from "../lib/classes/entities/shopEntity";
import { GoodsCategoryRepository } from "../lib/classes/repositories/goodsCategoryRepository";

import { UserEntity } from "../lib/classes/entities/userEntity";
import { IRepository, RepositoryFactory, repositoryType } from "../lib/classes/repositories/repositoryFactory";
import { ShopRepository } from "../lib/classes/repositories/shopRepository";

import { GraphQLSchema } from "graphql";
import { buildSchema } from "type-graphql";
import { PurchaseEntity } from "../lib/classes/entities/purchaseEntity";
import { PurchaseDetailsEntity } from "../lib/classes/entities/purhaseDetailsEntity";
import { PurchaseRepository } from "../lib/classes/repositories/purchaseRepository";
import { GoodsCategoryResolver } from "../lib/classes/resolvers/goodsCategoryResolver";
import { IncomeResolver } from "../lib/classes/resolvers/incomeResolver";
import { IncomeTypeResolver } from "../lib/classes/resolvers/incomeTypeResolver";
import { ShopResolver } from "../lib/classes/resolvers/shopResolver";

async function connectToDb() {
	const pgConnector = new PgConnector(dbConfig);
	pgConnector.connect();
}

async function bootstrap() {
	const schema: GraphQLSchema = await buildSchema({
		resolvers: [
			IncomeTypeResolver,
			IncomeResolver,
			GoodsCategoryResolver,
			ShopResolver
		]
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

	app.get("/", async (req, res) => {

		const repo: IRepository = RepositoryFactory.createRepository(repositoryType.ShopRepository);

		const resp = await (repo as ShopRepository).findById(1);

		console.log(resp);

		res.sendStatus(200);
	});

	const httpServer = createServer(app);

	httpServer.listen(port, () => {
		console.log(`server started on ${port}`);
	});

}

const dbConfig: ConnectionOptions = {
	type: "postgres",
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	username: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_DATABASE,
	synchronize: false,
	schema: process.env.DB_SCHEMA,
	logging: true,
	entities: [
		IncomeType,
		IncomeEntity,
		ShopEntity,
		UserEntity,
		GoodsCategoryEntity,
		GoodsEntity,
	// 	PurchaseEntity,
	// 	PurchaseDetailsEntity
	]
};

// TODO: Сделать обработку ошибок через фабричный метод https://blog.logrocket.com/design-patterns-in-node-js/

// TODO: аутентификация через passport.js https://medium.com/devschacht/node-hero-chapter-8-27b74c33a5ce https://code.tutsplus.com/ru/tutorials/site-authentication-in-nodejs-user-sign-up--cms-29933

// TODO: SOLID
// https://medium.com/@samueleresca/inversion-of-control-and-dependency-injection-in-typescript-3040d568aabe

// TODO: implement IoC container http://inversify.io/

// TODO: Вынести этот старт в асинк, чтобы все успевало законнектиться
connectToDb();

bootstrap();
