import { Client, ClientConfig } from "pg";

// TODO: Заменить пароль на реальный
// TODO : Создать дев юзера в базе
// TODO: Переделать на пул?
// TODO: Добавить обработчики событий коннекта-дисконнекта и тд
// TODO: Сделать через асинк-эвейты

const config: ClientConfig = {
	user: "postgres",
    database: "budget",
    password: "",
    port: 5433,
    host: "localhost"
};

const client: Client = new Client(config);

client.connect()
	.then(() => {
		console.log("connected");
	})
	.catch((err) => {
		console.log(`error: ${err}`);
	});

export default client;
