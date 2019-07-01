import express from "express";

const app = express();
const port: Number = 5050;

import { IncomeEntity, IncomeType } from "../lib/classes/incomeEntity";

const income = new IncomeEntity("test", IncomeType.Salary, 30000);

app.get("/", (req, res) => {
	res.send("hello");
});

app.listen(port, () => {
	console.log(`server started on ${port}`);
});
