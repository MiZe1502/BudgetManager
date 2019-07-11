import { DeleteResult, EntityRepository, Repository } from "typeorm";
import { runInThisContext } from "vm";
import { IncomeEntity } from "../entities/incomeEntity";
import { IRepository } from "./repositoryFactory";

@EntityRepository(IncomeEntity)
export class IncomeRepository extends Repository<IncomeEntity> implements IRepository {

	public async findById(id: number): Promise<IncomeEntity> {
		return await this.findOne(id);
	}

	public async findByName(name: string): Promise<IncomeEntity> {
		return await this.createQueryBuilder("income")
			.where("income.name = :name", {name})
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

	public async findByType(id?: number, name?: string): Promise<IncomeEntity[]> {
		if (name && id) {
				return this.createQueryBuilder("income")
					.innerJoinAndSelect("income.type", "type", "type.name = :name AND type.id = :id", { id, name } )
					.getMany();
			} else if (name) {
				return this.createQueryBuilder("income")
					.innerJoinAndSelect("income.type", "type", "type.name = :name", { name } )
					.getMany();
			} else if (id) {
				return this.createQueryBuilder("income")
					.innerJoinAndSelect("income.type", "type", "type.id = :id", { id } )
					.getMany();
			} else {
				return await this.find({relations: ["type"]});
			}
	}

}
