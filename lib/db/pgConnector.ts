import { Pool, PoolConfig } from "pg";
import { Connection, ConnectionOptions, createConnection } from "typeorm";

export class PgConnector {
	private config: ConnectionOptions = null;

	constructor(config: ConnectionOptions) {
		this.config = config;
	}

	public async connect() {
		await createConnection(this.config);
	}
}

export default PgConnector;
