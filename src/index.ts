import express from "express";

const app = express();
const port: Number = 5050;

import { IncomeEntity, IncomeType } from "../lib/classes/incomeEntity";

import Category from "../lib/db/dbConnector";

app.get("/", (req, res) => {

	Category.find((err: any, categories: any) => {

		console.log(categories);

	 if (err) {
			res.send("Error!");
		} else {
			res.send(categories);
		}
	});

});

app.listen(port, () => {
	console.log(`server started on ${port}`);
});
