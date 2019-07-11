import { Arg, FieldResolver, Int, Mutation, Query, Resolver } from "type-graphql";
import { IncomeType } from "../entities/incomeEntity";
import { IncomeTypeRepository } from "../repositories/incomeTypesRepository";
import { IRepository, RepositoryFactory, repositoryType } from "../repositories/repositoryFactory";
import { AddIncomeTypeInput } from "../types/incomeTypeInputType";

@Resolver()
export class IncomeTypeResolver {

	private repo: IncomeTypeRepository = RepositoryFactory.createRepository(repositoryType.IncomeTypeRepository) as IncomeTypeRepository;

	// Queries

	@Query((returns) => [IncomeType])
	public async incomeTypes(): Promise<IncomeType[]> {
		return await this.repo.find();
	}

	@Query(((returns) => IncomeType))
	public async incomeTypeById(@Arg("id") id: number): Promise<IncomeType> {
		return await this.repo.findById(id);
	}

	@Query(((returns) => IncomeType))
	public async incomeTypeByName(@Arg("name") name: string): Promise<IncomeType> {
		return await this.repo.findByName(name);
	}

	// Mutations

	@Mutation((returns) => Int)
	public async removeIncomeTypeById(@Arg("id") id: number): Promise<number> {
		return await this.repo.removeById(id);
	}

	@Mutation((returns) => Int)
	public async removeIncomeTypeByName(@Arg("name") name: string): Promise<number> {
		return await this.repo.removeByName(name);
	}

	@Mutation((returns) => IncomeType)
	public async addIncomeType(@Arg("data") newIncomeType: AddIncomeTypeInput): Promise<IncomeType> {
		return await this.repo.save(newIncomeType);
	}

}
