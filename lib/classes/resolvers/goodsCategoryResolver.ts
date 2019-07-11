import { assertWrappingType } from "graphql";
import { Arg, FieldResolver, Int, Mutation, Query, Resolver } from "type-graphql";
import { GoodsCategoryEntity } from "../entities/goodsCategoryEntity";
import { GoodsCategoryRepository } from "../repositories/goodsCategoryRepository";
import { IRepository, RepositoryFactory, repositoryType } from "../repositories/repositoryFactory";

@Resolver()
export class GoodsCategoryResolver {

	private repo: GoodsCategoryRepository = RepositoryFactory.createRepository(repositoryType.GoodsCategoryRepository) as GoodsCategoryRepository;

	// Queries

	@Query((returns) => [GoodsCategoryEntity])
	public async goodsCategories(): Promise<GoodsCategoryEntity[]> {
		return await this.repo.find();
	}

	@Query(((returns) => GoodsCategoryEntity))
	public async goodsCategoryById(@Arg("id") id: number): Promise<GoodsCategoryEntity> {
		return await this.repo.findById(id);
	}

	@Query(((returns) => GoodsCategoryEntity))
	public async goodsCategoryByName(@Arg("name") name: string): Promise<GoodsCategoryEntity> {
		return await this.repo.findByName(name);
	}

	@Query((returns) => [GoodsCategoryEntity])
	public async goodsCategoryChainById(@Arg("id") id: number): Promise<GoodsCategoryEntity[]> {
		return await this.repo.getCategoryChainById(id);
	}

	// Mutations

	// @Mutation((returns) => Int)
	// public async removeIncomeTypeById(@Arg("id") id: number): Promise<number> {
	// 	return await this.repo.removeById(id);
	// }

	// @Mutation((returns) => Int)
	// public async removeIncomeTypeByName(@Arg("name") name: string): Promise<number> {
	// 	return await this.repo.removeByName(name);
	// }

}
