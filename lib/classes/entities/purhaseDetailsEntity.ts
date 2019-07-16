import { GoodsEntity } from "./goodsEntity";
import { ShopEntity } from "./shopEntity";
import { UserEntity } from "./userEntity";

import { Field, Float, Int, ObjectType } from "type-graphql";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./baseEntity";
import { PurchaseEntity } from "./purchaseEntity";

@ObjectType()
@Entity({
	name: "purchase_details"
})
export class PurchaseDetailsEntity {

    // @ManyToOne((type) => PurchaseEntity, (purhase) => purhase.details)
    // @Field((type) => PurchaseEntity)
    // public purchase: PurchaseEntity;

    // @Field()
    // @Column({
    //     name: "purchase_id"
    // })
    // private purchaseId: number;

    @Field((type) => Int)
	@PrimaryGeneratedColumn()
    private id: number;

	@JoinColumn({
        name: "goods_id"
    })
    @OneToOne((type) => GoodsEntity)
    @Field((type) => GoodsEntity)
	private goods: GoodsEntity;

	@Column()
	@Field((type) => Float)
    private amount: number;

    @Column()
    @Field((type) => Float)
    private price: number;

}
