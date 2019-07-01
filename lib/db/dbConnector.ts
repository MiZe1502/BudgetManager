import mongoose, { ConnectionOptions, Schema } from "mongoose";

const uri: string = "mongodb://localhost:27017/budget";

// TODO: Сделать формирование url
// TODO: Добавить логин-пароль для базы
// TODO: Заменить дефолтные промисы на bluebird

const mongooseOptions: ConnectionOptions = {
	useNewUrlParser: true,
	autoIndex: false, // Don't build indexes
	reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
	reconnectInterval: 500, // Reconnect every 500ms
	poolSize: 10, // Maintain up to 10 socket connections
	// If not connected, return errors immediately rather than waiting for reconnect
	bufferMaxEntries: 0,
	connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
	socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
	family: 4 // Use IPv4, skip trying IPv6
};

const db = mongoose.createConnection(uri, mongooseOptions);

db.on('connected', () => {
	console.log('connected to mongo')
})

db.on('error', (error) => {
	console.log(`error connecting to mongo: ${error}`)
})

db.on('disconnected', () => {
	console.log('disconnected from mongo')
})

module.exports = db


export interface ICategory extends mongoose.Document {
	name: string;
}

export const CategorySchema: Schema = new Schema({
	name: {
		type: String,
		required: true
	}
});

const Category = db.model<ICategory>("Category", CategorySchema);

console.log(Category.find((err, cats) => {
	console.log(cats);
}));

export default Category;
