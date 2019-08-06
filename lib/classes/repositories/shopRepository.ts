import { DeleteResult, EntityRepository, Repository } from "typeorm";
import { ShopEntity } from "../entities/shopEntity";
import { IRepository } from "./repositoryFactory";

@EntityRepository(ShopEntity)
export class ShopRepository extends Repository<ShopEntity> implements IRepository {

	public async findById(id: number): Promise<ShopEntity> {
		return await this.findOne(id);
	}

	public async findByName(name: string): Promise<ShopEntity> {
		return await this.createQueryBuilder("shop")
			.where("shop.name = :name", { name })
			.getOne();
	}

	public async removeById(id: number): Promise<number> {
		const res: DeleteResult = await this.delete(id);
		return res.affected;
	}

	public async removeByName(name: string): Promise<number> {
		const res = await this.createQueryBuilder("shop")
			.where("shop.name = :name", { name })
			.delete()
			.execute();
		return res.affected;
	}

	public async findByAddress(address: string): Promise<ShopEntity[]> {
		const lowerAddress = address.toLowerCase();
		return this.createQueryBuilder("shop")
			.where("LOWER(shop.address) like :address_both", {address_both: `%${lowerAddress}%`})
			.orWhere("LOWER(shop.address) like :address_post", {address_post: `${lowerAddress}%`})
			.orWhere("LOWER(shop.address) like :address_pre", {address_pre: `%${lowerAddress}`})
			.getMany();
	}

}
