import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { IncomeType } from "../entities/incomeEntity";
import { IncomeTypeRepository } from "../repositories/incomeTypesRepository";
import { IRepository, RepositoryFactory, repositoryType } from "../repositories/repositoryFactory";

@Resolver()
export class IncomeTypeResolver {

	@Query((returns) => [IncomeType])
	public async incomeTypes(): Promise<IncomeType[]> {
		const repo: IRepository = RepositoryFactory.createRepository(repositoryType.IncomeTypeRepository);

		return await (repo as IncomeTypeRepository).find();
	}

}
