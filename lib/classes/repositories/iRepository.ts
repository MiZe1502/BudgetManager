import { ENGINE_METHOD_DIGESTS } from "constants";

// TODO: Переименовать файлы в camelcase

export interface IRepository<T> {
	getAll(): Promise<T[]>;
	getById(id: number): Promise<T>;
	getByName(name: string): Promise<T>;
	add(entity: T): Promise<T>;
	update(id: number, newEntity: T): Promise<T>;
	removeById(id: number): Promise<number>;
	removeByName(name: string): Promise<number>;
}
