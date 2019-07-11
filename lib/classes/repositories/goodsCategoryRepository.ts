import { DeleteResult, EntityRepository, Repository } from "typeorm";
import { GoodsCategoryEntity } from "../entities/goodsCategoryEntity";
import { IRepository } from "./repositoryFactory";

@EntityRepository(GoodsCategoryEntity)
export class GoodsCategoryRepository extends Repository<GoodsCategoryEntity> implements IRepository {
	public async findById(id: number): Promise<GoodsCategoryEntity> {
		return await this.findOne(id);
	}

	public async findByName(name: string): Promise<GoodsCategoryEntity> {
		return await this.createQueryBuilder("income")
			.where("goods_category.name = :name", { name })
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

	// TODO: Переделать потом, создав фунцию в БД, и дергая только ее https://coderwall.com/p/whf3-a/hierarchical-data-in-postgres
	public async getCategoryChainById(id: number): Promise<GoodsCategoryEntity[]> {
		const query: string = `WITH RECURSIVE nodes(id, name, parent_id) AS (
								SELECT node.id, node.name, node.parent_id
								FROM budget.goods_category node WHERE id = ${id}
									UNION
								SELECT child.id, child.name, child.parent_id
								FROM budget.goods_category child, nodes node WHERE child.parent_id = node.id
							)
							SELECT * FROM nodes`;

		return await this.query(query);
	}

}
