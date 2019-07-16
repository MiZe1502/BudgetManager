import { getCustomRepository, Repository } from "typeorm";
import { GoodsCategoryRepository } from "./goodsCategoryRepository";
import { IncomeRepository } from "./incomeRepository";
import { IncomeTypeRepository } from "./incomeTypesRepository";
import { PurchaseRepository } from "./purchaseRepository";
import { ShopRepository } from "./shopRepository";

// TODO: Может, переделать на интерфейс как-то. Так избавимся от енума и увеличим уровень абстракции
export enum repositoryType {
	IncomeTypeRepository,
	IncomeRepository,
	GoodsRepository,
	PurchaseRepository,
	ShopRepository,
	GoodsCategoryRepository
}

export interface IRepository {

}

export class RepositoryFactory {
	public static createRepository(type: repositoryType): IRepository {
		switch (type) {
			case repositoryType.IncomeTypeRepository: {
				return getCustomRepository(IncomeTypeRepository);
			}
			case repositoryType.IncomeRepository: {
				return getCustomRepository(IncomeRepository);
			}
			case repositoryType.ShopRepository: {
				return getCustomRepository(ShopRepository);
			}
			case repositoryType.GoodsCategoryRepository: {
				return getCustomRepository(GoodsCategoryRepository);
			}
			case repositoryType.PurchaseRepository: {
				return getCustomRepository(PurchaseRepository);
			}
		}

	}
}
