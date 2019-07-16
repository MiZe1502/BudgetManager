import { ShopEntity } from "./shopEntity";
import { GoodsEntity } from "./goodsEntity";
import { UserEntity } from "./userEntity"

import { Entity, OneToOne, Column, JoinColumn, OneToMany, ManyToMany, JoinTable, ManyToOne } from "typeorm"
import { Field, ObjectType, Float } from "type-graphql"
import { BaseEntity } from "./baseEntity";
import { PurchaseEntity } from "./purchaseEntity";

@ObjectType()
@Entity({
	name: 'purchase_details'
})
export class PurchaseDetailsEntity extends BaseEntity {

	@JoinColumn({
        name: 'goods_id'
    })
    @OneToOne(type => GoodsEntity)
    @Field(type => GoodsEntity)
	private goods: GoodsEntity

    @ManyToOne(type => PurchaseEntity, purhase => purhase.details)
    @Field(type => PurchaseEntity)
    public purchase: PurchaseEntity

	@ManyToMany(type => GoodsEntity)
	@JoinTable()
	private goods: GoodsEntity[] = []

	@Column()
	@Field(type => Float)
    private amount: number
    
    @Column()
    @Field(type => Float)
    private price: number

	constructor(goods: Array<GoodsEntity>, datetime: Date = new Date()) {
		super(name)
		this.goods = goods
		this.datetime = datetime
	}

}