import express from "express";

const app = express();
const port: Number = 5050;

import client from "../lib/db/pgConnector";

import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from "constants";
import { IDbLoader, PgLoader } from "../lib/db/pgLoader";

app.get("/", async (req, res) => {

	const loader: IDbLoader = new PgLoader(client);

	await (loader as PgLoader).getIncomeTypes();

	await (loader as PgLoader).getIncomeTypeById(1);

	res.sendStatus(200);
});

app.listen(port, () => {
	console.log(`server started on ${port}`);
});
