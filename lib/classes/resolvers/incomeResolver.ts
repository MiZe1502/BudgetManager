import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { IsNull } from "typeorm";
import { IncomeEntity, IncomeType } from "../entities/incomeEntity";
import { IncomeRepository } from "../repositories/incomeRepository";
import { IRepository, RepositoryFactory, repositoryType } from "../repositories/repositoryFactory";

@Resolver()
export class IncomeResolver {

	@Query((returns) => [IncomeEntity])
	public async incomes(): Promise<IncomeEntity[]> {
		const repo: IRepository = RepositoryFactory.createRepository(repositoryType.IncomeRepository);
		return await (repo as IncomeRepository).find({relations: ["type"]});
	}

	@Query((returns) => IncomeEntity)
	public async incomeById(@Arg("id") id: number): Promise<IncomeEntity> {
		const repo: IRepository = RepositoryFactory.createRepository(repositoryType.IncomeRepository);
		return await (repo as IncomeRepository).findById(id);
	}

	@Query((returns) => IncomeEntity)
	public async incomeByName(@Arg("name") id: string): Promise<IncomeEntity> {
		const repo: IRepository = RepositoryFactory.createRepository(repositoryType.IncomeRepository);
		return await (repo as IncomeRepository).findById(name);
	}

	@Query((returns) => [IncomeEntity])
	public async incomesByType(@Arg("typeName", { nullable: true }) typeName?: string,
							                     @Arg("typeId", { nullable: true }) typeId?: number): Promise<IncomeEntity[]> {
		const repo: IRepository = RepositoryFactory.createRepository(repositoryType.IncomeRepository);

		console.log(typeName);
		console.log(typeof typeId);

		return await (repo as IncomeRepository).findByType(typeId, typeName);
	}

	// public async removeById(id: number): Promise<number> {
	// 	const res: DeleteResult = await this.delete(id);
	// 	return res.affected;
	// }

	// public async removeByName(name: string): Promise<number> {
	// 	const res = await this.delete(name);
	// 	return res.affected;
	// }

}
