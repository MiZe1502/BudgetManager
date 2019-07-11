import { Arg } from "type-graphql";
import { DeleteResult, EntityRepository, Repository } from "typeorm";
import { IncomeType } from "../entities/incomeEntity";

import { IRepository } from "./repositoryFactory";

@EntityRepository(IncomeType)
export class IncomeTypeRepository extends Repository<IncomeType> implements IRepository {

	public async findById(id: number): Promise<IncomeType> {
		return await this.findOne(id);
	}

	public async findByName(name: string): Promise<IncomeType> {
		return await this.createQueryBuilder("income_type")
			.where("income_type.name = :name", {name})
			.getOne();
	}

	public async removeById(id: number): Promise<number> {
		const res: DeleteResult = await this.delete(id);
		return res.affected;
	}

	public async removeByName(name: string): Promise<number> {
		const res = await this.delete(name);
		return res.affected;
	}

}
