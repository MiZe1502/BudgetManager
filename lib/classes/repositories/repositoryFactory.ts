import { Repository, getCustomRepository } from "typeorm";
import { IncomeTypeRepository } from "../../../dist/lib/classes/repositories/incomeTypesRepository";


enum repositoryType {
	IncomeTypeRepository,
	GoodsRepository,
	PurchaseRepository,
	ShopRepository,
	GoodsCategoryRepository
}


class repositoryFactory {
	static createRepository(type: repositoryType) {
		switch(type) {
			case repositoryType.IncomeTypeRepository: {
				return getCustomRepository(IncomeTypeRepository)
			}
		}

	}
}