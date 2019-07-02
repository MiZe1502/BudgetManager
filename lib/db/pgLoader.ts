import { PoolClient, Client } from "pg";
import { runInThisContext } from "vm";

type PgClient = Client | PoolClient

class PgLoader {

	private client: PgClient = null

	constructor(client: PgClient) {
		this.client = client
	}
}