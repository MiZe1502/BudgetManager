import { Arg, Int, Mutation, Query, Resolver, Root } from "type-graphql";
import { ShopEntity } from "../entities/shopEntity";
import { RepositoryFactory, repositoryType } from "../repositories/repositoryFactory";
import { ShopRepository } from "../repositories/shopRepository";

@Resolver()
export class ShopResolver {

	private repo: ShopRepository = RepositoryFactory.createRepository(repositoryType.ShopRepository) as ShopRepository;

	// Queries

	@Query((returns) => [ShopEntity])
	public async shops(): Promise<ShopEntity[]> {
		return await this.repo.find();
	}

	@Query((returns) => ShopEntity)
	public async shopById(@Arg("id") id: number): Promise<ShopEntity> {
		return await this.repo.findById(id);
	}

	@Query((returns) => ShopEntity)
	public async shopByName(@Arg("name") id: string): Promise<ShopEntity> {
		return await this.repo.findById(name);
	}

	@Query((returns) => [ShopEntity])
	public async shopByAddress(@Arg("address") address: string): Promise<ShopEntity[]> {

		return await this.repo.findByAddress(address);
	}

	// Mutations

	@Mutation((returns) => Int)
	public async removeShopById(@Arg("id") id: number): Promise<number> {
		return await this.repo.removeById(id);
	}

	@Mutation((returns) => Int)
	public async removeShopByName(@Arg("name") name: string): Promise<number> {
		return await this.repo.removeByName(name);
	}
}
