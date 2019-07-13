import { Field, ObjectType } from "type-graphql";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { CommentedEntity } from "./commentedEntity";
import { GoodsCategoryEntity  } from "./goodsCategoryEntity";

@ObjectType()
@Entity("goods")
export class GoodsEntity extends CommentedEntity {

	@Field()
	private amount: number;

	@Field((type) => GoodsCategoryEntity)
	@OneToOne((type) => GoodsCategoryEntity)
	@JoinColumn({
		name: "category_id",
		referencedColumnName: "id"
	})
	private category: GoodsCategoryEntity;

	@Field({
		nullable: true
	})
	@Column({
		name: "bar_code",
		nullable: true
	})
	private barCode?: string = null;

	constructor(name: string, category: GoodsCategoryEntity, barCode: string, amount: number) {
		super(name);
		this.category = category;
		this.amount = amount;
		this.barCode = barCode;
	}
}
