import { CommentedEntity } from "./commentedEntity";
import { ShopEntity } from "./shopEntity";
import { GoodsEntity } from "./goodsEntity";
import { UserEntity } from "./userEntity"

import { Entity, OneToOne, Column, JoinColumn, OneToMany, ManyToMany, JoinTable } from "typeorm"
import { Field, ObjectType } from "type-graphql"
import { PurchaseDetailsEntity } from "./purhaseDetailsEntity";

@ObjectType()
@Entity({
	name: 'purchase'
})
export class PurchaseEntity extends CommentedEntity {

	@Column()
	private datetime: Date = new Date()

	@Field((type) => ShopEntity)
	@OneToOne((type) => ShopEntity)
	@JoinColumn({
		name: "shop_id",
		referencedColumnName: "id"
	})
	private shop: ShopEntity

	// @ManyToMany(type => GoodsEntity)
	// @JoinTable()
	// private goods: GoodsEntity[] = []

	@OneToMany(type => PurchaseDetailsEntity, detail => detail.purchase)
	@Field(type => PurchaseDetailsEntity)
	public details: PurchaseDetailsEntity[] = []



	@Field(type => UserEntity)
	@OneToOne(type => UserEntity)
	@JoinColumn({
		name: 'user_id',
		referencedColumnName: 'id'
	})
	private user: UserEntity

	@Column()
	@Field()
	private datetime: Date

	@Column()
	@Field()
	private photo: string

	@Column()
	@Field(type => Float)
	private sum: number

	constructor(goods: Array<GoodsEntity>, datetime: Date = new Date()) {
		super(name)
		this.goods = goods
		this.datetime = datetime
	}

}