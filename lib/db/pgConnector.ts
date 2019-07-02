import { Pool, PoolConfig } from "pg";

const config: PoolConfig = {
	user: "dev",
    database: "budget",
    password: "secretdevpassword",
    port: 5433,
	host: "localhost",
	max: 20,
	idleTimeoutMillis: 30000,
	connectionTimeoutMillis: 2000
};

const pool: Pool = new Pool(config);

pool.on("connect", () => {
	console.log(`connect client`);
});

pool.on("acquire", () => {
	console.log(`acquire client`);
});

pool.on("error", (err) => {
	console.log(`error in postgres: ${err.message}`);
});

pool.on("remove", (err) => {
	console.log(`remove client from pool`);
});

export default pool;
