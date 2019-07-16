import { Arg, FieldResolver, Int, Mutation, Query, Resolver, Root } from "type-graphql";
import { IsNull } from "typeorm";
import { IncomeEntity } from "../entities/incomeEntity";
import { IncomeType } from "../entities/incomeTypeEntity";
import { IncomeRepository } from "../repositories/incomeRepository";
import { IRepository, RepositoryFactory, repositoryType } from "../repositories/repositoryFactory";

@Resolver()
export class IncomeResolver {

	private repo: IncomeRepository = RepositoryFactory.createRepository(repositoryType.IncomeRepository) as IncomeRepository;

	// Queries

	@Query((returns) => [IncomeEntity])
	public async incomes(): Promise<IncomeEntity[]> {
		return await this.repo.find({relations: ["type"]});
	}

	@Query((returns) => IncomeEntity)
	public async incomeById(@Arg("id") id: number): Promise<IncomeEntity> {
		return await this.repo.findById(id);
	}

	@Query((returns) => IncomeEntity)
	public async incomeByName(@Arg("name") id: string): Promise<IncomeEntity> {
		return await this.repo.findById(name);
	}

	@Query((returns) => [IncomeEntity])
	public async incomesByType(@Arg("typeName", { nullable: true }) typeName?: string,
							                     @Arg("typeId", { nullable: true }) typeId?: number): Promise<IncomeEntity[]> {

		return await this.repo.findByType(typeId, typeName);
	}

	// Mutations

	@Mutation((returns) => Int)
	public async removeIncomeById(@Arg("id") id: number): Promise<number> {
		return await this.repo.removeById(id);
	}

	@Mutation((returns) => Int)
	public async removeIncomeByName(@Arg("name") name: string): Promise<number> {
		return await this.repo.removeByName(name);
	}
}
