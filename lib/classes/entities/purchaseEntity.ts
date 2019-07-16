import { CommentedEntity } from "./commentedEntity";
import { GoodsEntity } from "./goodsEntity";
import { ShopEntity } from "./shopEntity";
import { UserEntity } from "./userEntity";

import { Field, Float, ObjectType } from "type-graphql";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne } from "typeorm";
import { PurchaseDetailsEntity } from "./purhaseDetailsEntity";

@ObjectType()
@Entity({
	name: "purchase"
})
export class PurchaseEntity extends CommentedEntity {

	// @ManyToMany(type => GoodsEntity)
	// @JoinTable()
	// private goods: GoodsEntity[] = []

	@OneToMany((type) => PurchaseDetailsEntity, (detail) => detail.purchase)
	@Field((type) => PurchaseDetailsEntity)
	public details: PurchaseDetailsEntity[];

	@Field((type) => ShopEntity)
	@OneToOne((type) => ShopEntity)
	@JoinColumn({
		name: "shop_id",
		referencedColumnName: "id"
	})
	private shop: ShopEntity;

	@Field((type) => UserEntity)
	@OneToOne((type) => UserEntity)
	@JoinColumn({
		name: "user_id",
		referencedColumnName: "id"
	})
	private user: UserEntity;

	@Column()
	@Field()
	private datetime: Date;

	@Column()
	@Field()
	private photo: string;

	@Column()
	@Field((type) => Float)
	private sum: number;

	constructor(name: string, datetime: Date = new Date()) {
		super(name);
		this.datetime = datetime;
	}

}
