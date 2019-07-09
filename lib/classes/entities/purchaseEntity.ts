import { BaseEntity } from "./baseEntity";
import { ShopEntity } from "./shopEntity";
import { GoodsEntity } from "./goodsEntity";
import { UserEntity } from "./userEntity"


class PurchaseEntity extends BaseEntity {

	private shop: ShopEntity
	private goods: Array<GoodsEntity> = []
	private user: UserEntity
	private date: Date

	constructor(goods: Array<GoodsEntity>, date: Date = new Date()) {
		super(name)
		this.goods = goods
		this.date = date
	}

}