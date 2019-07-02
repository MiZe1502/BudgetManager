import { Client, Pool, QueryResult } from "pg";

import { plainToClass } from "class-transformer";

import { IncomeType } from "../classes/incomeEntity";

type PgClient = Client | Pool;

export interface IDbLoader {
	getClient(): any;

	connect(): Promise<void>;

	disconnect(): Promise<void>;

}

export class PgLoader implements IDbLoader {

	private _client: PgClient = null;

	constructor(client: PgClient) {
		this._client = client;
	}

	public getClient(): any {
		return this._client;
	}

	public async connect(): Promise<void> {
		await this._client.connect();
	}

	public async disconnect(): Promise<void> {
		await this._client.end();
	}

	public async getIncomeTypes(): Promise<IncomeType[]> {
		const query: string = "SELECT * FROM budget.income_type";
		const res: QueryResult = await this._client.query(query);

		if (!res.rows || res.rowCount === 0) {
			throw new Error("no income types returned from db");
		}

		return plainToClass(IncomeType, res.rows);
	}

	public async getIncomeTypeById(id: number): Promise<IncomeType> {
		const values: number[] = [id];
		const query: string = "SELECT * FROM budget.income_type WHERE id = $1";

		const res: QueryResult = await this._client.query(query, values);

		if (!res.rows || res.rowCount === 0) {
			throw new Error(`no income type with id = ${id} returned from db`);
		}

		console.log(plainToClass(IncomeType, res.rows[0]));

		return plainToClass(IncomeType, res.rows[0]);
	}

}
