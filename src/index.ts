import express from "express";

const app = express();
const port: Number = 5050;

import client from "../lib/db/pgConnector";

app.get("/", async (req, res) => {

	const resp = await client.query("select * from budget.category");

	console.log(resp);

});

app.listen(port, () => {
	console.log(`server started on ${port}`);
});
