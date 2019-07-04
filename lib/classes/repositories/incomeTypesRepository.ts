import { Connection, getConnection } from "typeorm";
import { IncomeType } from "../entities/incomeEntity";
import { IRepository } from "./iRepository";

// TODO: Переделать на кастомный репозиторий или на постгресовский

export class IncomeTypeRepository implements IRepository<IncomeType> {

	private connection: Connection;

	constructor(connection: Connection) {
		this.connection = connection;
	}

	public async getAll(): Promise<IncomeType[]> {
		return await this.connection.manager.find(IncomeType);
	}

	public async getById(id: number): Promise<IncomeType> {
		return await this.connection.manager.findOne(IncomeType, id);
	}

	public async getByName(name: string): Promise<IncomeType> {
		return await this.connection.manager.findOne(IncomeType, {
			where: {
				name
			}
		});
	}

	public async add(newIncomeType: IncomeType): Promise<IncomeType> {
		return await this.connection.manager.save(newIncomeType);
	}

	public async update(id: number, newIncomeType: IncomeType): Promise<IncomeType> {
		// TODO: Можно сразу сделать через update, но надо разобраться
		const oldIncomeType: IncomeType = await this.connection.manager.findOne(IncomeType, id);
		oldIncomeType.setName(newIncomeType.getName());
		return await this.connection.manager.save(oldIncomeType);
		// return await this.connection.manager.update(IncomeType, id, { name: newIncomeType.getName() })
	}

	public async removeById(id: number): Promise<number> {
		const res = await this.connection.manager.delete(IncomeType, id);
		return res.affected;
	}

	public async removeByName(name: string): Promise<number> {
		const res = await this.connection.manager.delete(IncomeType, {name});
		return res.affected;
	}

}
